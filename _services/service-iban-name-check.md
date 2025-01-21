---
title: "Verification of Payee: IBAN-Name-Check"
description: Ich biete die Entwicklung eines IBAN-Name-Check Services an, um die Anforderungen an Verification of Payee (VoP) aus PSD3 zu erfüllen. Hierbei erfülle ich die API-Spezifikationen und die vorgegebenen Anforderungen an die Namensprüfung.
gallery_columns: 2
date: 2024-12-20 15:01:35 +0300
label: PSD3, IBAN-Name-Check, Verification of Payee, VOP, Betrugsprävention
cover: '/images/psd3-iban-name-check-icon.png'
page_cover: '/images/hintergrund-unsplash.jpg' 
caption: "Gallerie/Screenshots"
images:
  - image: "/images/name-iban-check-psd3-sequence-diagram.png"
    alt: Darstellung des Services im Sequenzdiagramm der EU
  - image: "/images/name-iban-check-psd3-expectations.png"
    alt: Automatisierter Test auf Excel-Basis bzgl. der Anforderungen der Namensprüfung
---

### Verification of Payee

Die "Verification of Payee" (VoP) des European Payments Council (EPC) ist ein Verfahren, bei dem **vor** der Ausführung einer Zahlung überprüft wird, ob der Name (für natürliche Personen) oder der LEI (Legal Entity Identifier) des Zahlungsempfängers mit dem des Zielkontos (ermittelt über IBAN) übereinstimmt. So soll das Risiko für fehlgeleitete Zahlungen minimiert und Betrug vermieden werden. Die erste Version des VoP-Regelwerks wurde am 10. Oktober 2024 veröffentlicht und tritt am 5. Oktober 2025 in Kraft.

### IBAN-Name-Check Service

Herzstück dieser Richtlinie ist der IBAN-Name-Check – ein Dienst, der den Empfängernamen, der bei der Bank des Begünstigten hinterlegt ist, mit dem Namen abgleicht, der bei der Transaktion angegeben wurde. Da diese Prüfung zeitlich vor der Initiierung einer Instant Payment erfolgt, zählt sie nicht in die vorgeschriebene Zeitspanne für Instant Payments hinein, soll aber dennoch hoch skalierbar sein und laut der Anforderung des EPC kurze Antwortzeiten unterstützen.

Ein typisches Betrugsszenario, das durch die Einführung von VoP vermieden werden kann, ist der klassische Rechnungsbetrug: Ein Betrüger gibt sich als Geschäftspartner aus und verschickt gefälschte Rechnungen mit seiner eigenen IBAN. Ohne VoP würde die Zahlung aufgrund der korrekten IBAN überwiesen, auch wenn der Name nicht übereinstimmt. Mit VoP erkennt das System die Diskrepanz zwischen dem Empfängernamen und der angegebenen IBAN, sodass der Überweisende auf diese Auffälligkeit hingewiesen werden kann, noch bevor er die Zahlung freigibt.

### Name-Matching-Algorithmus

Das EPC definiert klare Regeln, wie stark der Name von den hinterlegten Daten abweichen darf, um als **Match**, **Close Match** oder **No Match** eingestuft zu werden. Dabei werden Kriterien berücksichtigt wie einfache Buchstabendreher, Modifikationen mit gleichbleibender Phonetik, Abkürzungen des Vornamens oder die Verwendung gängiger Spitznamen.

So wird beispielsweise eine Überweisung an einen "Alex" akzeptiert, wenn der Zahlungsempfänger "Alexander" heißt, da dies als Close Match gilt. Eine Überweisung an "Andreas" hingegen würde als **No Match** eingestuft, da keine ausreichende Namensähnlichkeit vorliegt.

### Projektdetails

- **Lieferzeit**: 90 Tage
- **Revisionen**: Bis zu 3 Revisionen, um die Lösung Ihren Anforderungen anzupassen.

**Optionale Zusatzleistungen:**
- Implementierung eines Lasttests zum Sicherstellen der Performance-Anforderungen (+14 Tage)
- Erstellung fachlicher Regressionstests des Namensvergleichs auf Excel-Basis mit Nachvollziehbarem Test-Reporting (+14 Tage)
- Implementierung einer mandantenfägigen Lösung zur Trennung der Daten unterschiedlicher Institute (+21 Tage)

### Unterstütze Schnittstellen

- **EPC-konforme Schnittstelle nach VoP-Rulebook**: Meine Dienstleistung gewährleistet die Implementierung einer konformen API-Schnittstelle, die vollständig den Anforderungen des EPC-Rulebooks entspricht. Dies schließt die performante Einzelverarbeitung ein.
- **Batch-Schnittstelle für pain.001 und pain.002**: Neben der Standard-API-Integration unterstütze ich die Implementierung einer Batch-Schnittstelle (z.B. für Einsatz in EBICS), die das Einlesen von Zahlungsaufträgen im ISO 20022-Format **pain.001** ermöglicht. Diese Schnittstelle ist noch nicht durch die EPC gefordert, jedoch ist sie in Diskussion und könnte als kurzfristige Lösung für Massenanfragen gewählt werden. Die Ergebnisse der Namensprüfung können als Statusberichte im Format **pain.002** zurückgegeben werden.
- **Import-Schnittstelle**: Die Implementierung einer individuellen Schnittstelle, um Kontoinformationen performant in das System zu importieren.

### Ablauf des Projekts

1. **Systemintegration und API-Entwicklung**: Erstellung einer Übersicht, wie der IBAN Name Check Service in Ihre Umgebung integriert wird. Erstellung von API-Definitionen (z.B. CLI, REST, MQ).
2. **Technischer Proof of Concept**: Lieferung einer Version, die den API-Contracts entspricht und in Ihre Umgebung integriert werden kann.
3. **Finale Version**: Fertigstellung des Dienstes incl. konfigurierbarer Namensprüfung und Datenimport (z.B. IBAN und Namen)
4. **Lasttests (optional)**: Durchführung von Lasttests auf Ihrer Umgebung, um sicherzustellen, dass der Service auch unter hoher Belastung zuverlässig funktioniert.
5. **Regressionstests (optional)**: Automatisierung fachlicher Tests der Namensprüfung

Mit meiner Unterstützung erhalten Sie eine robuste, valide und zukunftssichere Lösung zur Erfüllung der VoP-Anforderung des EPC.
