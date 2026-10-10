# Wort für Wort – deine Bibellese-App

Die App begleitet dein analoges Bibellesen. Sie enthält keinen Bibeltext und benötigt weder Konto noch kostenpflichtige Dienste, Frameworks oder externe Bibliotheken. Alle Dateien sind fertig: Du musst nichts programmieren.

## 1. Auf dem Mac ausprobieren

Öffne den Ordner „bibellese-app“ und ziehe „index.html“ in Safari. So kannst du die Oberfläche ausprobieren. Für zuverlässige Speicherung und Offline-Installation nutze danach die veröffentlichte HTTPS-Adresse. Die lokale Datei und die veröffentlichte App haben getrennte Daten. Bei einem Wechsel: Backup exportieren und in der neuen App importieren.

## 2. Kostenlos auf GitHub Pages veröffentlichen

1. Öffne https://github.com und erstelle ein kostenloses Konto, falls du noch keines hast.
2. Klicke oben auf „+“ → „New repository“. Name: „bibellese-app“. Wähle „Public“, aktiviere „Add a README file“ und klicke „Create repository“.
3. Klicke im neuen Repository auf „Add file“ → „Upload files“.
4. Öffne im Finder den entpackten Ordner „bibellese-app“. Ziehe seinen **Inhalt** in das Upload-Feld, nicht den gesamten Ordner. „index.html“ muss direkt im Repository liegen. Lade auch beide PNG-Symbole hoch. Die unsichtbare Datei „.nojekyll“ ist hilfreich, aber für diese einfachen Dateien nicht zwingend nötig.
5. Klicke unten auf „Commit changes“.
6. Öffne „Settings“ → links „Pages“. Unter „Build and deployment“ wähle „Deploy from a branch“. Wähle „main“ und „/(root)“, dann „Save“.
7. Warte einige Minuten. Auf derselben Seite erscheint deine Website-Adresse: https://DEIN-BENUTZERNAME.github.io/bibellese-app/ . Öffne sie in Safari und speichere sie als Lesezeichen.

Der Programmcode ist im öffentlichen Repository sichtbar. Deine persönlichen Einträge bleiben auf deinem Gerät, solange du Backups nicht selbst hochlädst. **Lade keine persönlichen JSON-Backups ins Repository hoch.**

Offizielle Anleitung: https://docs.github.com/en/pages/getting-started-with-github-pages/configuring-a-publishing-source-for-your-github-pages-site

## 3. Auf dem iPhone installieren und offline nutzen

1. Öffne deine veröffentlichte Website-Adresse in Safari auf dem iPhone.
2. Warte auf den Hinweis „Offline bereit“ unten in der App.
3. Tippe auf „Teilen“ → „Zum Home-Bildschirm“. Falls angezeigt, aktiviere „Als Web-App öffnen“. Tippe auf „Hinzufügen“.
4. Öffne die App über das neue Symbol einmal mit Internet. Danach kannst du sie im Flugmodus öffnen und Einträge speichern.

Offizielle Apple-Anleitung: https://support.apple.com/de-ch/guide/iphone/iphea86e5236/27/ios/27

## 4. Deine ersten Einträge

- „Neues Ziel“: Name, Beginn und optionales Zieldatum eintragen. Ein oder mehrere Bücher ankreuzen oder AT, NT bzw. ganze Bibel wählen.
- Für früher gelesene Kapitel wähle einen entsprechend früheren Beginn und trage sie mit dem tatsächlichen Lesedatum nach.
- „Fortschritt eintragen“: Buch, Kapitel von/bis und Lesedatum wählen. Eine Reflexion ist freiwillig. Mehrere Bücher an einem Tag: je Buch einen Eintrag speichern.
- Ein falscher Eintrag lässt sich unter „Einträge & Gedanken“ löschen und danach neu eintragen.
- Unter „Bücher & Fortschritt“ siehst du die gelesenen Kapitelzahlen. Im Eintragsformular werden die bereits gelesenen Kapitel aufgelistet.
- Über das Symbol oben rechts wechselst du zwischen hellem und dunklem Design.

## 5. Backups und Gerätewechsel

„Backup exportieren“ speichert eine JSON-Datei. Auf dem iPhone liegt sie normalerweise in „Dateien“ → „Downloads“. Sichere sie regelmäßig, zum Beispiel in deinem privaten iCloud Drive. „Backup importieren“ stellt sie wieder her und ersetzt nach Bestätigung die aktuellen Ziele. Exportiere diese vorher, wenn du sie behalten möchtest.

Es gibt keine automatische Synchronisierung zwischen Mac und iPhone oder verschiedenen Browsern. Browserdaten können beim Löschen von Website-Daten oder durch das Betriebssystem verloren gehen. Verwende die App nicht im privaten Browsermodus. Safari und die Home-Bildschirm-App können getrennte Speicher haben: Importiere dein Backup in der Version, die du dauerhaft verwendest.

## 6. Was die Prognosen bedeuten

Langfristig = erstmals gelesene Kapitel / alle Kalendertage seit dem Beginn, einschließlich heute. Tage ohne Lesen zählen mit.

Letzte 7 Tage = erstmals gelesene Kapitel von heute und den sechs Vortagen / 7. Auch bei neuen Zielen bleibt der Nenner 7. Doppelt eingetragene Kapitel zählen nur einmal; für die Geschwindigkeit zählt ihr frühestes Lesedatum. Ein gelöschter Eintrag berechnet den Fortschritt neu.

Restkapitel / Tagesdurchschnitt ergibt die verbleibenden Tage, aufgerundet. Ohne gelesene Kapitel im jeweiligen Zeitraum gibt es keine Prognose. Ein vollständiges Ziel zeigt „Ziel erreicht“. Dein Zieldatum ist eine separate Orientierung und verändert die beiden Prognosen nicht.

Die App verwendet 66 Bücher mit 1.189 Kapiteln (evangelischer Kanon, Joel mit 3 und Maleachi mit 4 Kapiteln). Andere Bibelausgaben können eine andere Kapitelzählung oder zusätzliche Bücher enthalten.

## 7. Spätere Updates

Lade die geänderten Dateien wieder über „Add file“ → „Upload files“ hoch. Bei Änderungen an der App muss die Cache-Version in „sw.js“ erhöht werden, zum Beispiel von „v1“ auf „v2“. Schließe danach alle geöffneten App-Fenster und öffne die App mit Internet erneut. Ein neues Offline-Paket wird erst aktiv, wenn die alte Version geschlossen wurde. Die gespeicherten Lesedaten bleiben erhalten. Exportiere vor Updates trotzdem ein Backup.

## Prüfung dieser Lieferung

Automatisch geprüft: 66 Bücher / 1.189 Kapitel, doppelte Kapitel, Nulltage, fester 7-Tage-Zeitraum, vollständige Ziele, ungültige Daten, JSON-Rückimport, JavaScript-Syntax und Manifest-Symbole. Zusätzlich in der mobilen Browser-Vorschau geprüft: Ziel erstellen, Kapitelbereich speichern, Neuladen mit erhaltenem Fortschritt und erfolgreiche Service-Worker-Registrierung. Ein tatsächlicher iPhone-/Safari- und Flugmodus-Test muss auf deinem Gerät nach Veröffentlichung erfolgen.
