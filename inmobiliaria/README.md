# ELITE CONSULTING — Immobilienvorlage (Entwurf)

Dieser Ordner ist eine **statische Entwurfsvorlage** für eine Immobilienseite in Las Palmas de Gran Canaria. Er ist nicht zur Veröffentlichung bestimmt. Alle Seiten tragen `<meta name="robots" content="noindex">`.

Die Vorlage ändert die bestehende Website im Stamm des Repositorys nicht: keine bestehenden HTML-Seiten, kein `CNAME`, keine Deployment-Konfiguration. Solange dieser Entwurf nicht geprüft ist, **nicht mergen**. Ein Merge in den Branch, den GitHub Pages ausliefert, würde den Ordner mit veröffentlichen.

## Was die Texte behaupten — und was nicht

Eingetragen sind nur Angaben, die für diese Vorlage vorgegeben wurden:

- Marke: ELITE CONSULTING
- Name: Andrej Tymko
- Studium der Rechtswissenschaft an der Ludwig-Maximilians-Universität München
- Die Tätigkeit beginnt erst. Es gibt keinen Nachweis abgeschlossener Vermittlungen.
- Ort: Las Palmas de Gran Canaria
- Viertel: Las Canteras/Guanarteme, Santa Catalina, Ciudad Jardín, Alcaravaneras, Triana, Vegueta

Es gibt keine erfundenen Bewertungen, Verkaufszahlen, Erfahrungsjahre, Preise, Telefonnummern, E-Mail-Adressen, Anschriften oder Registernummern. Fehlende Angaben stehen in eckigen Klammern.

Das Jurastudium ist als Ausbildung genannt. Die Seiten sagen ausdrücklich, dass daraus keine anwaltliche Beratung und keine Kanzlei wird.

Kontaktdaten der bereits bestehenden Website im Repository-Stamm werden hier nicht übernommen. Wer später veröffentlicht, trägt die Daten ein, die zu **dieser** Tätigkeit gehören, und lässt das Verhältnis beider Auftritte rechtlich klären. Die bestehende Website beschreibt eine andere Tätigkeit.

## Ordner

```
inmobiliaria/
  index.html              Sprachwahl (ebenfalls noindex)
  README.md               diese Anleitung
  assets/
    styles.css            Gestaltung, ohne Build
    site.js               nur das Mobilmenü
    favicon.svg
    fonts/                Schriften, selbst gehostet, SIL Open Font License
  es/                     Spanisch, Hauptsprache
  en/                     Englisch
  de/                     Deutsch, Sie-Form
```

Sprachwechsel sind gewöhnliche Links. `assets/site.js` öffnet und schließt nur das Menü auf schmalen Fenstern. Ohne JavaScript bleiben die Links sichtbar.

## Seiten je Sprache

| Inhalt | Español | English | Deutsch |
| --- | --- | --- | --- |
| Start | `es/index.html` | `en/index.html` | `de/index.html` |
| Person | `es/sobre-mi.html` | `en/about.html` | `de/ueber-mich.html` |
| Leistungen | `es/servicios.html` | `en/services.html` | `de/leistungen.html` |
| Bestand | `es/propiedades.html` | `en/properties.html` | `de/immobilien.html` |
| Kontakt | `es/contacto.html` | `en/contact.html` | `de/kontakt.html` |
| Impressum / Aviso legal | `es/aviso-legal.html` | `en/legal-notice.html` | `de/impressum.html` |
| Datenschutz | `es/privacidad.html` | `en/privacy.html` | `de/datenschutz.html` |
| Cookies | `es/cookies.html` | `en/cookies.html` | `de/cookies.html` |

Im Kopf jeder Sprachseite stehen `hreflang` für `es`, `en`, `de` und `x-default`. `x-default` zeigt auf die spanische Fassung derselben Seite. Die Adressen sind wurzelrelativ (`/inmobiliaria/...`), passend zu einer Domain, die das Repository im Stamm ausliefert. Vor einer Indexierung durch absolute URLs mit der endgültigen Origin ersetzen.

Die drei Karten unter „Propiedades“ sind Gestaltungsmuster. Sie sind als Beispiel gekennzeichnet und keine Angebote.

Das Kontaktformular ist ausgezeichnet, der Sende-Button ist deaktiviert. Es gibt kein Backend.

## Platzhalter zum Ersetzen

Spanisch, so auch in der Fußzeile jeder spanischen Seite:

- `[Teléfono]`
- `[Email]`
- `[WhatsApp]`
- `[Foto]`
- `[Dirección – pendiente]`
- `[Horario – pendiente]`
- `[Honorarios – pendiente de definir]`
- `[Renta]`, `[Presupuesto]`, `[Precio]`, `[Superficie]`, `[Habitaciones]`, `[Referencia]`, `[Tipo de inmueble]`, `[Barrio]`
- `[Número de Registro de Agentes Inmobiliarios de Canarias – pendiente]`
- `[Forma jurídica – pendiente]`, `[NIF/NIE – pendiente]`, `[Domicilio completo – pendiente]`
- weitere Klammern in den Rechtstexten, unter anderem `[Ley aplicable – pendiente]`, `[Fuero – pendiente]`, `[Finalidades – pendiente]`, `[Solución de consentimiento – pendiente]`

Englisch und Deutsch verwenden dieselben Lücken in der jeweiligen Sprache, zum Beispiel `[Phone]` / `[Telefon]`, `[Fees – not yet set]` / `[Honorar – noch nicht festgelegt]`, `[Canary Islands estate-agent register number – pending]` / `[Nummer im Register der Immobilienmakler der Kanaren – ausstehend]`.

Suche im Ordner nach `[`, bis keine Klammer mehr übrig ist, die noch ein Loch markiert.

Bilder: keine Stockfotos. Die Flächen sind Verläufe. Eine echte Aufnahme ersetzt das Feld `[Foto]` durch eine Datei in diesem Ordner, mit aussagekräftigem Alternativtext. Keine Bilder von Personen oder Wohnungen verwenden, an denen keine Rechte bestehen.

## Rechtstexte

Aviso legal, Datenschutz und Cookies — und die Fassungen auf Englisch und Deutsch — sind **Gerüste**. Jede dieser Seiten sagt das am Anfang. Ein Anwalt oder eine Gestoría muss sie schreiben oder freigeben, bevor die Seiten öffentlich werden.

Offen und nicht zu raten:

- Rechtsform, Steuer- oder Identnummer, Anschrift
- ob und wann die Eintragung im Register der Immobilienmakler der Kanaren vorliegt und wie sie auszuweisen ist
- ob neben dem spanischen Hinweispflichten-Text ein deutsches Impressum nötig ist
- Rechtsgrundlagen, Speicherdauern, Empfänger und zuständige Aufsichtsbehörde
- ob das spätere Hosting Cookies oder Protokolle setzt

Diese Vorlage setzt mit eigenem Code keine Cookies. Die Sprachwahl speichert nichts. Die Schriften liegen lokal, damit der Besuch keine Schrift von Google anfordert. Das ist eine Beschreibung des Entwurfs, keine abgeschlossene Cookie-Prüfung des künftigen Hostings.

Das Formular erst anschalten, wenn der Versandweg, die Datenschutzerklärung und die Rechtsgrundlage feststehen. Dafür ist hier bewusst kein Skript eingebaut.

## Lokal ansehen

Im Stamm des Repositorys:

```bash
python3 -m http.server 8000
```

Dann im Browser `http://localhost:8000/inmobiliaria/es/` öffnen. Es gibt keinen Build-Schritt.

## Spätere Veröffentlichung

Nur als Anleitung. Nichts davon ist hier eingerichtet, und nichts davon soll mit diesem Entwurf geschehen.

1. **Ordner in diesem Repository lassen.** Die Datei `CNAME` im Stamm nennt bereits `eliteconsult.eu`. GitHub Pages würde einen gemergten Ordner unter `https://eliteconsult.eu/inmobiliaria/` ausliefern, sobald Pages den Stamm des Repositorys veröffentlicht. `CNAME` dafür nicht ändern, wenn die bestehende Website auf der Hauptdomain bleiben soll. Nicht mergen, solange Platzhalter, Registerfrage, Rechtstexte und das Verhältnis zur bestehenden Website offen sind. Die Seiten im Stamm beschreiben eine andere Tätigkeit.

2. **Eigene Adresse.** Eine Subdomain oder ein eigenes Repository wäre ein separater Schritt: DNS, und bei GitHub Pages eine eigene Quelle. Diese Vorlage legt keinen DNS-Eintrag an und ändert die Pages-Einstellungen nicht. Die konkrete Subdomain ist hier nicht festgelegt, weil keine vorgegeben wurde.

3. **Bevor irgendetwas indexiert werden darf:**
   - alle Klammern ersetzen
   - Rechtstexte freigeben lassen
   - Registernummer nur eintragen, wenn sie wirklich vorliegt
   - Formular an einen echten Versand hängen
   - `noindex` entfernen
   - `canonical` und `hreflang` auf absolute URLs der endgültigen Origin umstellen
   - eine Vorschau unter `https://<benutzer>.github.io/<repository>/inmobiliaria/` braucht dabei ein anderes Präfix als `/inmobiliaria/`. Die Sprachlinks sind relativ und funktionieren an beiden Orten; die `hreflang`-Adressen im Kopf heute nicht automatisch auf einer Projekt-URL.

## Schriften

Cormorant Garamond (Cormorant Project) und Source Sans 3 (Adobe) liegen als WOFF2 unter `assets/fonts/`. Beide stehen unter der SIL Open Font License 1.1. Die Lizenztexte liegen daneben: `OFL-CormorantGaramond.txt` und `OFL-SourceSans3.txt`. Es sind die lateinischen Schnitte für die Gewichte, die das Stylesheet nutzt. Systemschriften sind als Ersatz genannt, falls eine Datei nicht lädt.
