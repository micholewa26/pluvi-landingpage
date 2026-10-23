import LegalLayout from "./LegalLayout";
import { company } from "../data/content";

const email = (
  <a href={`mailto:${company.email}`} className="text-primary hover:underline">
    {company.email}
  </a>
);

const PolitykaPrywatnosci = () => (
  <LegalLayout title="Polityka Prywatności">
    <p>
      Niniejsza Polityka Prywatności określa zasady przetwarzania i ochrony danych
      osobowych Użytkowników serwisu internetowego pluvi.pl, prowadzonego przez Pluvi
      sp. z o.o. z siedzibą w Lublinie, adres: {company.address}, NIP: {company.nip}, KRS: {company.krs}.
    </p>
    <p className="text-muted-foreground text-xs">
      Data ostatniej aktualizacji: 23 października 2026 r.
    </p>

    <section>
      <h2>1. Administrator danych osobowych</h2>
      <p>
        Administratorem danych osobowych jest Pluvi sp. z o.o. z siedzibą w Lublinie,
        adres: {company.address},
        wpisana do rejestru przedsiębiorców Krajowego Rejestru Sądowego pod numerem KRS:
        {" "}{company.krs}, NIP: {company.nip}.
      </p>
      <p>
        W sprawach związanych z ochroną danych osobowych można kontaktować się pod
        adresem e-mail: {email}.
      </p>
    </section>

    <section>
      <h2>2. Zakres i cel przetwarzania danych</h2>
      <p>
        Administrator przetwarza dane osobowe wyłącznie w zakresie niezbędnym do
        realizacji określonych celów:
      </p>
      <p>Gdy Użytkownik korzysta z formularza kontaktowego, zbierane są następujące dane:</p>
      <ul>
        <li>imię i/lub nazwisko,</li>
        <li>adres e-mail (jeżeli podany),</li>
        <li>numer telefonu (jeżeli podany),</li>
        <li>nazwa firmy (jeżeli dotyczy),</li>
        <li>treść zapytania.</li>
      </ul>
      <p>
        Dane te przetwarzane są w celu obsługi zapytania ofertowego lub kontaktowego, na
        podstawie art. 6 ust. 1 lit. b RODO (niezbędność do podjęcia działań przed
        zawarciem umowy) oraz art. 6 ust. 1 lit. f RODO (prawnie uzasadniony interes
        Administratora).
      </p>
    </section>

    <section>
      <h2>3. Podstawa prawna przetwarzania</h2>
      <p>
        Dane osobowe przetwarzane są zgodnie z Rozporządzeniem Parlamentu Europejskiego i
        Rady (UE) 2016/679 z dnia 27 kwietnia 2016 r. (RODO).
      </p>
    </section>

    <section>
      <h2>4. Okres przechowywania danych</h2>
      <p>
        Dane z formularza kontaktowego przechowywane są przez okres niezbędny do obsługi
        zapytania, a następnie przez czas wynikający z przepisów prawa (np. przepisów
        podatkowych – do 5 lat).
      </p>
      <p>Po upływie wskazanego okresu dane są trwale usuwane lub anonimizowane.</p>
    </section>

    <section>
      <h2>5. Prawa Użytkownika</h2>
      <p>Każda osoba, której dane dotyczą, ma prawo do:</p>
      <ul>
        <li>dostępu do swoich danych osobowych (art. 15 RODO),</li>
        <li>sprostowania nieprawidłowych danych (art. 16 RODO),</li>
        <li>usunięcia danych (prawo do bycia zapomnianym) (art. 17 RODO),</li>
        <li>ograniczenia przetwarzania danych (art. 18 RODO),</li>
        <li>przenoszenia danych (art. 20 RODO),</li>
        <li>wniesienia sprzeciwu wobec przetwarzania (art. 21 RODO),</li>
        <li>
          wniesienia skargi do organu nadzorczego – Prezesa Urzędu Ochrony Danych
          Osobowych (UODO), ul. Stawki 2, 00-193 Warszawa.
        </li>
      </ul>
      <p>Aby skorzystać z powyższych praw, prosimy o kontakt pod adresem: {email}.</p>
    </section>

    <section>
      <h2>6. Odbiorcy danych</h2>
      <p>Dane osobowe mogą być przekazywane następującym kategoriom odbiorców:</p>
      <ul>
        <li>
          dostawcom usług hostingowych i informatycznych – wyłącznie na podstawie umów
          powierzenia przetwarzania danych,
        </li>
        <li>
          podmiotom świadczącym usługi księgowe i prawne – w zakresie wymaganym
          przepisami prawa,
        </li>
        <li>
          organom państwowym – gdy obowiązek przekazania danych wynika z przepisów prawa.
        </li>
      </ul>
      <p>
        Dane osobowe nie są sprzedawane ani udostępniane osobom trzecim w celach
        marketingowych.
      </p>
    </section>

    <section>
      <h2>7. Przekazywanie danych poza EOG</h2>
      <p>
        Administrator co do zasady nie przekazuje danych osobowych poza Europejski Obszar
        Gospodarczy (EOG). W przypadku konieczności takiego przekazania, Administrator
        zapewni odpowiedni poziom ochrony danych.
      </p>
    </section>

    <section>
      <h2>8. Pliki cookies</h2>
      <p>
        Serwis może wykorzystywać pliki cookies (ciasteczka) w celu zapewnienia
        prawidłowego działania strony oraz analizy ruchu.
      </p>
      <p>
        Pliki cookies nie zawierają danych osobowych umożliwiających identyfikację
        Użytkownika.
      </p>
      <p>
        Użytkownik może w każdej chwili zmienić ustawienia dotyczące cookies w swojej
        przeglądarce lub wyrazić/cofnąć zgodę za pomocą banera cookies.
      </p>
    </section>

    <section>
      <h2>9. Bezpieczeństwo danych</h2>
      <p>
        Administrator stosuje odpowiednie środki techniczne i organizacyjne w celu
        ochrony danych osobowych przed nieuprawnionym dostępem, utratą lub zniszczeniem.
      </p>
      <p>Strona korzysta z szyfrowanego połączenia HTTPS.</p>
      <p>
        Dostęp do danych osobowych posiadają wyłącznie upoważnieni pracownicy
        Administratora, zobowiązani do zachowania poufności.
      </p>
    </section>

    <section>
      <h2>10. Zmiany Polityki Prywatności</h2>
      <p>
        Administrator zastrzega sobie prawo do wprowadzania zmian w niniejszej Polityce
        Prywatności. O wszelkich istotnych zmianach Użytkownicy zostaną poinformowani
        poprzez publikację zaktualizowanej wersji dokumentu na stronie Serwisu wraz z
        nową datą aktualizacji.
      </p>
      <p>Polityka Prywatności obowiązuje od dnia 17 marca 2026 r.</p>
    </section>
  </LegalLayout>
);

export default PolitykaPrywatnosci;
