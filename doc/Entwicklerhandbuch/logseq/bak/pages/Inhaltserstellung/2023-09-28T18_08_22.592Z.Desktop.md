- {{renderer :tocgen2}}
	- type:: toc
	  chapter:: 11
- Neben der [Veränderung bestehender Seiten]([[Inhaltsänderung]]) ermöglichen Seitenbearbeitungsformulare ebenso die Erstellung neuer Seiten.
- ## Bestehender Inhaltstyp
	- Bei [bestehenden Inhaltstypen](((64f5804b-576f-456d-abc1-66a8688f8cb4))) geschieht dies durch die Schaltfläche ![Neuen Inhalt erstellen]() in der [Inhaltsübersicht]([[Inhaltsübersicht]]) oder in den Verknüpfungen (![Schaltfläche „Verknüpfungen“]().
	- Zunächst muss der [Inhaltstyp]([[Inhaltstypen]]) der zu erstellenden Seite ausgewählt werden. Anschließend öffnet sich ein Seitenbearbeitungsformular, wie durch den Inhaltstyp beschrieben. Mit einem Klick auf die Schaltfläche „speichern“, wird die Seite erstellt. Eventuell ist sie jedoch nicht gleich sichtbar, da wie bei der [Inhaltsänderung]([[Inhaltsänderung]]) erst eine Revision erstellt wird, welche einen [Arbeitsablauf](((64f46814-c36a-4efb-90d1-01413210b08c))) durchlaufen muss.
	- [#A] Einige [Seiten]([[Alle Seiten o. Aufbau Website]]) weisen Besonderheiten auf und erfordern weitere Schritte:
		- ### Unterrichtsseiten
			- Der Titel der Unterrichtsseite sollte genau dem Namen des beschriebenen Fachs entsprechen und **keine weiteren Informationen** (wie Alternativen, Abkürzungen oder Stufendifferenzierungen) enthalten.
			- Jede Stufe, in der das Fach unterrichtet wird, bekommt eine eigene Version – eine eigene Unterrichtsseite – des Fachs. Legen Sie die Stufe/Version der neuen Unterrichtsseite im Feld „Stufe“ des Seitenbearbeitungsformulars fest. Die unterschiedlichen Seiten der Stufen/Versionen müssen für eine fehlerfreie Funktionsweise der Website in ihrem Seitentitel **identisch** sein: Alle drei Seiten des Fachs Deutsch heißen so mit dem Titel „Deutsch“.
			- Wenn eine neue Unterrichtsseiten erstellt wird, kann kein [Fachleiter]() automatisch darauf zugreifen. Damit der zuständige Fachleiter die Seite weiter bearbeiten kann, muss dieser als Autor der Seite festgelegt werden:
				- (Erstellen Sie wenn nötig einen neuen [Benutzer]([[Benutzerverwaltung]]).)
				  logseq.order-list-type:: number
				- Finden Sie als Administrator den Bereich „Authoring information“ im [Bearbeitungsformular]([[Inhaltsänderung]]) der jeweiligen Seite *(siehe Abb. 11.1)*.
				  logseq.order-list-type:: number
				- Geben Sie nun im Feld „Geschrieben von“ den Benutzernamen des gewünschten Benutzers ein und **speichern** Sie die Änderungen. Der Benutzer kann nun die Unterrichtsseite verändern; der Administrator behält aber weiterhin das Recht, die Seite ebenfalls zu verändern. Beachten Sie, dass sich der Autor der Seite **nicht** nachträglich ändert, falls ein anderer Benutzer (z.B. der Administrator) als der im Feld „Geschrieben von“ Angegebene die Seite verändert.
				  logseq.order-list-type:: number
			- Falls es sich bei der neuen Unterrichtsseite um ein neues, noch nicht auf der Seite erschienenes Fach handelt, muss der **exakte** Titel des Unterrichtsseite (der Name des Fachs) als Begriff dem Vokabular „Fächer“ hinzugefügt werden. Lesen Sie dazu [Kapitel 9]([[Taxonomie]]).
			- Falls es sich bei der neuen Unterrichtsseite um ein neues, noch nicht auf der Seite erschienenes Fach handelt, sollte die „Version“ der Unterrichtsseite *mit der niedrigsten Stufe* dem Hauptmenü hinzugefügt werden. Neben dem im [Kapitel 13.1]() beschriebenen Ansatz können Sie dazu auch das Formular im Bereich „Menüeinstellungen“ des Seitenbearbeitungsformulars nutzen. Im Feld „Übergeordneter Link“ sollte dann entweder „-- Unterricht“ oder eine der Unterkategorien (für naturwissenschaftliche Fächer beispielsweise „---- MINT“) ausgewählt werden. Der Linktitel sollte dem Namen des Fachs oder seiner Abkürzung – solange für Laien verständlich – entsprechen.
		- ### Stufenseiten
			- Falls es sich bei der neuen Stufenseite um eine neue, noch nicht auf der Seite erschienenen Stufe handelt, muss der **exakte** Wert des Feldes (siehe unten) „Systemname“ als Begriff dem Vokabular „Stufen“ hinzugefügt werden. Lesen Sie dazu [Kapitel 9]([[Taxonomie]]).
		- **Erstellen Sie keine neuen Seiten mit den folgenden Inhaltstypen**: Startseite, Standort. – Verändern Sie stattdessen die Bestehenden.
- ## Neuer Inhaltstyp
  id:: 64f46814-5e6d-4ce3-aeda-0c91acd81873
	- Für jede Ansammlung von ähnlichen, noch nicht bestehenden Seiten, auf die kein [bestehender Inhaltstyp](((64f5804b-576f-456d-abc1-66a8688f8cb4))) angewendet werden kann, sollte ein neuer [Inhaltstyp]([[Inhaltstypen]]) erstellt werden:
		- Öffnen Sie die [Übersichtsseite der Inhaltstypen](https://gcm.schule/dev/gcmofficial/admin/structure/types) und klicken Sie auf ![Neuen Inhaltstyp erstellen]()
		  logseq.order-list-type:: number
		- Es öffnet sich ein Formular, in dem Sie die Einstellungen für alle Seiten, die diesem Inhaltstyp angehören, verändern können.
		  logseq.order-list-type:: number
			- Achten Sie bitte darauf, dass in den "Veröffentlichungseinstellungen" ein **Häckchen bei "Neue Revision erstellen"** gesetzt ist, um eine ordnungsgemäße Weiternutzung des Inhaltstyps zu gewährleisten.
			- In den Anzeigeeinstellungen finden Sie ein Feld, in dem Sie die Datums und Autoreninformationen (siehe Abb. 11.2) (de-)aktivieren können.
		- Klicken Sie auf ![Speichern und Felder verwalten]()
		  logseq.order-list-type:: number
		- Nun können Sie unterschiedliche Bereiche für bestimmte Informationen festlegen (z.B. ein Bereich für "Wichtige Notizen"), sowie Metadaten und [Taxonomie]() für die Seiten einrichten. Dafür bedienen Sie sich Feldern. Sie fügen ein neues Feld mit einem Klick auf ![Feld hinzufügen]() hinzu
		  logseq.order-list-type:: number
	- ### Felder
	  id:: 64f89b14-fe90-4cd3-a797-1ad8abdf1670
		- Felder sind vorgefertigte Bereiche innerhalb einer Seite, welche durch den Inhaltstyp definiert werden. Da das [Theme]([[Das Theme verändern]]) auf die Felder zugreifen kann, können ihre Position und ihre Darstellung angepasst werden.
		- Der Inhalt der Felder, der durch das [Seitenbearbeitungsformular]([[Inhaltsänderung]]) beschrieben wird, wird in durch das Feld in die Datenbank geschrieben und ausgelesen. Die genaue Art und Weise dessen wird durch den Feldtyp (siehe unten) bestimmt.
		- Wenn Sie ein neues Feld erstellen (siehe oben), werden Sie zunächst nach dem Feldtyp (siehe unten) gefragt. Alternativ können Sie ein bereits bestehendes Feld auswählen. Dies ist ratsam, wenn Sie die gleiche Funktion, Aufgabe oder Struktur über mehrere Inhaltstypen hinweg planen.
		- Felder nehmen immer nur einen vorher festgelegten Datentyp entgegen. Es handelt sich bei diesem Typ aber nicht nur um den Datentyp der Daten in der Datenbank, deswegen wird er wird „Feldtyp“ genannt. Der Feldtyp ermöglicht eine genauere Einteilung und legt zudem die Aufgabe des Feldes fest.
		- Die Funktion und die Datentypen eines Feldtyps sind in der Regel durch die Bennenung des Feldtyps intuitiv verständlich.
		- #### Auswahl besonderer Feldtypen
			- **Referenz**: Taxonomie-Begriff
				- Auch: **Entitätsreferenzierung**
				- Hierbei handelt es sich um einen Link zu der Seite eines (oder mehrerer) in der Regel bereits bestehendem [[Taxonomie]]-Begriffs.
					- Die verfügbaren Begriffe werden durch die Auswahl eines (oder mehrerer) [Vokabulars](((64f5f710-eda0-406a-9140-86795496e6f7))) bestimmt.
				- Mit diesem Feld lassen sich auch beliebig viele Begriffe hinzufügen, um die jeweilige Seite zu kategorisieren (Lesen Sie auch dazu „Taxonomie“).
				- Um die Erstellung eines neuen Begriffs mit dem Seitenbearbeitungsformular zu ermöglichen, aktivieren Sie in den Einstellungen zu dem Referenztyp die Checkbox „Referenzierte Entitäten erstellen, sofern diese nicht bereits existieren“ *(Abb. 11.2)*.
			- **Referenz**: Benutzer
				- Auch: **Entitätsreferenzierung**
				- Hierbei handelt es sich um einen Link zu der Vorstellungsseite eines bereits bestehenden [Benutzers]([[Benutzerverwaltung]]).
				- Ebenfalls möglich wäre eine Kategorisierung der Seiten nach Benutzern (Zum Beispiel lässt sich so eine Liste an Beteiligten umsetzen).
			- **Referenz**: Inhalt
				- Auch: **Entitätsreferenzierung**
				- Hierbei handelt es sich um eine Weiterleitung zu einem beliebigen Inhalt.
				- Bei diesem „Inhalt“ handelt es sich um alles, was keine Seite, Inhaltstyp oder Seitenabschnittstyp darstellt. Beispiele sind Menülinks, Kommentare oder aber auch bereits hochgeladene Dateien.
				- Die Benutzung dieses Feldtyps für einfache Zwecke ist nicht empfohlen. Benutzen Sie stattdessen den jeweiligen eigenen Feldtyp für den gewünschten Inhalt.
			- **Text**: Klartext
				- Bei dem Inhalt handelt es sich um reinen, unformatierten Text.
				- Der Text wird durch das Feld nicht im Nachhinein verändert: Es werden keine zusätzlichen HTML-Tags oder Attribute hinzugefügt.
				- Aus diesem Grund ist dieser Feldtyp ratsam, wenn der Text durch das Theme oder das Modul weiter verwendet wird, da diese direkt auf den Text zugreifen können.
					- Sie können damit auch Metadaten, welche nur der Verarbeitung durch das Theme/Modul dienen, mit diesem Feldtyp speichern.
			- **Algemein**: Boolesch
				- Dieses Feld kann immer nur genau einen von zwei Werten (z.B. 1/0, wahr/falsch, Ja/Nein) annehmen.
				- Die beiden Werte können durch die Formularfelder *„An“-Beschriftung* und *„Aus“-Beschriftung* bei Bearbeitung des Felds angepasst werden.
				- Stellen Sie in den Anzeigeeinstellungen des Inhaltstyps die *Anzeige* dieses Felds (Zahnrad-Icon) am besten auf 1/0 um, wenn sie den Wert einfacher durch das [Theme]([[Das Theme verändern]]) auslesen wollen.
			- **Algemein**: Zeitstempel
				- Hierbei handelt es sich um ein Eingabefeld für eine Zeitangabe mit Datum, Stunden, Minuten und Sekunden.
				- Es wird standardmäßig auf den Veränderungszeitpunkt der Seite gestellt.
			- **Referenzrevisionen**: Seitenabschnitt
				- Auch: **Entitätsreferenz-Revision**
				- Hierbei handelt es sich um die Einbettung eines (oder mehrerer) [Seitenabschnitts](((64f46814-8758-4012-b88e-7d06b8ccc162))).
				- Dabei wird eine Liste von Seitenabschnitt-Entitäten eines bestimmten Seitenabschnittstypen erstellt.
					- Im jeweiligen [Seitenbearbeitungsformular]([[Inhaltsänderung]]) können neue Seitenabschnitte durch die Schaltfläche „Neuen Eintrag hinzufügen“ am unteren Ende dieser Liste erstellt werden.
					- Die Seitenabschnitte präsentieren sich im Seitenbearbeitungsformular der Seite, in welche sie eingebettet sind, als eigene Formulare, welche durch ihren Seitenabschnittstypen definiert sind.
		- Wenn Sie den Feldtyp *Bild* wählen, lesen Sie bitte auch den unten stehenden Abschnitt zu *Bildstilen*.
		- Jedem Feld wird neben dem festgelegten Titel bei der Erstellung ein maschinenlesbarer Systemname zugeordnet, über den das Theme und andere Bestandteile des Systems auf das Feld und dessen Inhalt zugreifen können.
		- [#A] Bitte beachten Sie, dass alle Felder, welche im Nachhinein durch das Theme verwendet werden sollen - auch solche, welche nicht angezeigt werden sollen - im Reiter „Anzeige verwalten“ der Einstellungen des Inhaltstyps sich im aktivierten Bereich befinden sollten. Befinden sie sich im Bereich „Deaktiviert“, so kann auch das Theme nicht mehr auf sie zugreifen. Das Theme ist allerdings in der Lage, das Feld im Nachhinein auszublenden.
	- ### Bildstile
		- Aus datensparenden Gründen, die sowohl ökologisch als auch wegen einer erhöhten Benutzerfreundlichkeit durch kürzere Ladezeiten begründet sind, sollte die Größe von besonders wichtigen oder großen Bildern an den Bildschirm des Clients angepasst und entsprechend vor-skaliert zu dem Client übertragen werden.
			- Zu den wichtigen Bildern zählen zum Beispiel diejenigen in den „Titelbild“-Feldern
		- Dies wird durch das [Modul]([[Themes, Module & Technologien]]) „Responsive Image“ ermöglicht.
		- Um den angesprochenen Mechanismus zu nutzen, müssen alle betroffenen Felder (siehe oben) vom Typ „Bild“ in den Anzeigeeinstellungen des jeweiligen Inhaltstyps angepasst werden *(Abb. 11.3)*:
			- Wählen Sie das Format „Responsives Bild“.
			  logseq.order-list-type:: number
			- Passen Sie die Formateinstellungen (Zahnrad-Icon) an und wählen Sie einen responsiven Bildstil.
			  logseq.order-list-type:: number
		- Eine Übersicht aller responsiven Bildstile findet sich auf der Seite [https://gcm.schule/dev/gcmofficial/admin/config/media/responsive-image-style](https://gcm.schule/dev/gcmofficial/admin/config/media/responsive-image-style). Hier lassen sich die Bildstile auch konfigurieren.
		- Lesen Sie [hier](), wie auch das Theme auf responsive Bildstile zugreifen kann.
- ## Benutzerdefinierte URL
	- Standartmäßig folgt die URL einer jeden [Seite]([[Alle Seiten o. Aufbau Website]]) folgendem Schema: 
	  `/node/<num>`
	- Um die URLs für Besucher intuitiver zu gestalten, sodass sich die Seiten besser gemerkt werden können, bzw. besser über sie gesprochen werden kann, lassen sich die URLs über die Seite [URL-Aliase](https://gcm.schule/dev/gcmofficial/admin/config/search/path) der Benutzeroberfläche im [Bereich „Konfiguration“](((64f5701f-9136-48f0-8c35-481f6ab7074d))) anpassen. Dies geschieht auf zwei Arten:
	- ### Einzelne Seiten
		- Um die URL einer einzelnen Seite zu verändern (ein Beispiel ist die [Über-Uns-Seite](((64f57626-0c5f-40a9-ae65-2f60591e5327)))) gehen Sie bitte auf die Seite URL-Aliase.
		  logseq.order-list-type:: number
		- Sie befinden sich im Tab „Liste“. Klicken Sie auf die Schaltfläche ![Alias hinzufügen]().
		  logseq.order-list-type:: number
		- Füllen Sie das Formular aus und klicken Sie auf „Speichern“.
		  logseq.order-list-type:: number
			- Die Sprache können Sie auf „- Nicht festgelegt -“ belassen. Ansonsten wählen Sie bitte die Sprache aus, in der die Seite geschrieben ist. Der Alias sollte dementsprechend auch in dieser Sprache geschrieben sein. Standardmäßig ist die Sprache der Website „Deutsch“.
	- ### Mehrere ähnliche Seiten
		- Neben der Möglichkeit, die URL einer einzelnen Seite anzupassen, können Sie auch die URL von mehreren gleichartigen Seiten anpassen. Generell sollte die Regel sein, dass nur für (und am besten auch für jeden) [[Inhaltstypen]] ein sogenanntes URL-Muster erstellt werden sollte.
		- Die URLs der gleichartigen Seiten folgen nach der Erstellung des Musters einem vorgegebenen Schema. Einzelne Seiten der gleichartigen Seiten werden nicht, solange nicht manuell verändert, von diesem Schema abweichen. Außerdem bekommt jede neue Seite bei der Erstellung automatisch einen URL-Alias nach dem vorgegebenen Schema.
		- Die genannte Funktionalität wird durch das [Modul]([[Themes, Module & Technologien]]) „Pathauto“ ermöglicht.
		- Eine Übersicht über alle Muster/Schemas findet sich auf der Seite URL-Aliase (siehe oben) unter dem Tab „Muster“.
		  logseq.order-list-type:: number
		- Um ein neues Muster zu erstellen, klicken Sie auf die Schaltfläche ![Pathauto-Muster hinzufügen]().
		  logseq.order-list-type:: number
		- Wählen Sie „Inhalt“ als Art des Musters im folgenden Formular und vergeben Sie einen Namen.
		  logseq.order-list-type:: number
		- Sobald Sie speichern, können Sie das Muster anpassen.
		  logseq.order-list-type:: number
			- Wählen Sie zunächst den betroffenen Inhaltstyp (Sie können auch mehrere wählen, dies wird aber aus Gründen der Eindeutigkeit nicht empfohlen)
			  logseq.order-list-type:: number
			- Sie können nun ein Muster vorschreiben: Schreiben Sie in das Formularfeld „Pfadmuster“ das gewünschte URL-Schema.
			  logseq.order-list-type:: number
				- Trennen Sie Kategorien oder Unterseiten mit „/“ (Bsp.: `/tutorial/kapitel-11`).
				- Sie können sich dabei sogenannten „Token“ behelfen, welche automatisch für jede Seite angepasst/erstellt werden. Ein Beispiel ist das Token „[node:title]“ - Mit ihm lässt sich der Seitentitel in die URL einbinden (Bsp.: `kapitel-11` ist zu spezifisch, mit `[node:title]` kann der Titel dieses Kapitels automatisch eingefügt werden. Das Muster `/tutorial/[node:title]` würde sich also in diesem Fall zu `/tutorial/inhaltserstellung` auflösen).
					- Alle verfügbaren Token können Sie mit einem Klick auf die Schaltfläche „Alle verfügbaren Token durchsuchen“ einsehen. Es öffnet sich ein Popup. Mit Klick auf das jeweilige Token wird es automatisch in das Formularfeld eingefügt, solange es fokussiert ist.