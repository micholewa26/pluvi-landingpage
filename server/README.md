# Endpoint formularza kontaktowego

`send.php` to backend formularza ze strony głównej. **Nie jest częścią builda Vite** —
jest wdrażany ręcznie przez FTP na hosting home.pl:

- serwer FTP: `serwer2614532.home.pl` (konto `pluvi2026@pluvi.pl`)
- ścieżka docelowa: `/formularz/send.php`
- adres produkcyjny: `https://serwer2614532.home.pl/formularz/send.php`

Zabezpieczenia: CORS ograniczony do `https://pluvi.pl` i `https://www.pluvi.pl`,
honeypot `_gotcha`, limit 5 zgłoszeń/h z jednego IP. Zgłoszenia trafiają mailem
na `kontakt@pluvi.pl` przez serwer pocztowy home.pl — dane nie przechodzą przez
żadne firmy trzecie.

Po zmianie pliku wgraj go ponownie np. tak (hasło FTP w lokalnym pliku, nie w repo):

```
curl --ssl-reqd -T server/send.php "ftp://serwer2614532.home.pl/formularz/send.php" --user "pluvi2026@pluvi.pl:HASŁO"
```
