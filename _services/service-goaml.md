---

title: Automatisierung des FIU-Reportings mit goAML XML 
description: Ich biete professionelle Dienstleistungen zur Automatisierung von goAML XML Reporting, einschließlich Datenkonvertierung, benutzerdefinierter Datenzuordnung und XML-Validierung.
gallery_columns: 2
date: 2025-04-01 10:00:00 +0200
label: goAML, FIU Reporting, XSD 1.1, SAR, STR, AML
cover: '/images/goaml-icon.png'
caption: "Gallerie/Screenshots"
page_cover: '/images/hintergrund-unsplash.jpg'

---

### Automatisierung der FIU-Meldung per goAML XML

Das goAML Reporting ist entscheidend für verpflichtete Unternehmen, die Berichte zu Geldwäsche-Verdachtsmeldungen (SAR, STR und weitere) effizient und korrekt an die FIU übermitteln müssen. Mit meiner Erfahrung bei der Automatisierung des goAML Meldeprozesses via XML-Erzeugung biete ich meine Expertise an, um auch Ihren Workflow zu optimieren.

Falls Ihre AML-Software nicht alle erforderlichen Daten für eine vollständige goAML-Meldung bereitstellen kann, haben Sie die Möglichkeit, das XML im Web-Portal der FIU hochzuladen und die Meldung manuell zu ergänzen oder zu korrigieren. Durch den vorab erfolgten Import der relevanten Transaktionen wird dennoch eine erhebliche Zeitersparnis erzielt.

### Generierung der XML-Dateien gemäß XSD

Ich entwickle Lösungen, um die extrahierten Daten aus Ihrer AML-Software in das goAML XML-Format zu konvertieren. Dabei kommt das spezielle XSD der jeweiligen FIU (in Deutschland dem Zoll unterstellt) zum Einsatz, um sicherzustellen, dass alle Daten vor der Einreichung vollständig und valide sind. Es erfolgt nicht nur eine Prüfung auf Pflichtfelder und gültige reguläre Ausdrücke, sondern auch auf komplexe XSD 1.1-Assertions, die z. B. bedingte Pflichtfelder prüfen.

**Bitte beachten Sie:** Jede FIU stellt ein eigenes XSD Schema bereit und ich bin nach § 2 GwG nicht befugt, eigenständig die neusten Versionen der deutschen FIU zu erhalten. Im Rahmen dieses Projektes stellen Sie somit das XSD zur Verfügung. Für Showcases verwende ich daher das XSD der FIU aus Luxemburg, da dies öffentlich zugänglich ist. 

### Konfigurierbarkeit und Wartbarkeit

Das XML-Output wird basierend auf Ihren spezifischen fachlichen und formatspezifischen Anforderungen befüllt. Das Mapping gestalte ich konfigurierbar und modular, sodass Sie in einfachen Fällen ohne Anpassung des Quellcodes einfach und sicher die Befüllung der Datenfelder erweitern können.

Dies betrifft auch die Zuordnung der Enumerationen, sodass Sie selbst Änderungen vornehmen können, falls sich diese in künftigen XSD-Schemata ändern. Dies gewährleistet eine langfristige Nutzbarkeit und Anpassungsfähigkeit.

### Regressions-Testing (Optional)

Um auch künftigen Änderungen des XSD-Schemas oder Ihrer Compliance-Software gewappnet zu sein, biete ich als optionale Zusatzleistung die Entwicklung eines Regressions-Testframeworks an. Dies basiert auf Excel, sodass auch Fachanwender die Tests spezifizieren, verstehen und warten können. Diese Excel-Dateien werden automatisiert ausgelesen und als End-To-End-Test ausgeführt.

### Ablauf des Projekts

1. **Systemintegration und API-Entwicklung**: Erstellung einer Übersicht, wie der goAML-XML-Service in Ihre Umgebung integriert wird. Erstellung von API-Definitionen und Schnittstellenbeschreibungen (z. B. CLI, REST, MQ, S3). Abstimmung des Lieferartefakts wie z. B. JAR-Datei, WAR-Datei oder Docker-Image.
2. **Technischer Proof of Concept**: Lieferung einer Version, die den API-Contracts entspricht und in Ihre Umgebung integriert werden kann.
3. **Finale Version**: Fertigstellung des Dienstes inkl. Mapping Ihrer Beispieldaten zu validen goAML XML Reports.

Mit meiner Unterstützung erhalten Sie eine robuste, valide und zukunftssichere Lösung für Ihr goAML XML Reporting.
