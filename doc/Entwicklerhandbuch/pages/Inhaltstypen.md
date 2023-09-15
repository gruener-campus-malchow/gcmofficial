- {{renderer :tocgen2}}
	- type:: toc
	  chapter:: 8
- Einige [Seiten]([[Alle Seiten o. Aufbau Website]]) auf der Website sind einander in ihrem Aufbau so ähnlich, dass sie zusammengefasst werden können, um ihre Bearbeitung zu erleichtern. Ein Beispiel sind die Unterrichtsseiten. Um ähnliche Seiten zusammenzufassen, wird sich eines sogenannten „Inhaltstyps“ bedient, der wie eine Blaupause für Seiten fungiert.
- Alle Inhaltstypen sind im [Bereich „Struktur“ der Benutzeroberfläche](((64f56fc5-43a2-4a01-85b2-cf0a516965e3))) auf der Seite [https://gcm.schule/dev/gcmofficial/admin/structure/types](https://gcm.schule/dev/gcmofficial/admin/structure/types) einsehbar.
- Für einen Inhaltstyp können bestimmte Einstellungen getroffen werden, sowie die Struktur und das Aussehen einer Seite dieses Inhaltstyps festgelegt werden. Die Einstellungen, die Struktur und das Aussehen gelten dann für alle Seiten, die diesem Typ angehören.
- Jeder Inhaltstyp besitzt ein anderes [Seitenbearbeitungsformular]([[Inhaltsänderung]]): Durch die Felder in diesem Formular lässt sich genau bestimmen, wo auf einer Seite dieses Inhaltstyps die Informationen erscheinen sollen. Die Seite lässt sich damit in Abschnitte teilen, die durch und für jeden Inhaltstyp vorbestimmt sind. Wie Sie einen neuen Inhaltstyp und damit auch sein Seitenbearbeitungsformular erstellen können, erfahren Sie in [Kapitel 11.2]().
- Die Abschnitte/Felder, in die ein Inhaltstyp gegliedert ist, lassen sich mit einem Klick auf die Schaltfläche „Felder verwalten“ erfahren und verändern.
- Um einzelne Felder auszublenden aber dennoch durch das Bearbeitungsformular mit Inhalt füllen zu können, ziehen Sie bitte das jeweilige Feld in den Einstellungen „Anzeige verwalten“ des Inhaltstyps in den Abschnitt „deaktiviert“. **Achtung!** Beinahe alle Inhaltstypen werden im Nachhinein – auch in ihrer Struktur – durch das [Theme]([[Das Theme verändern]]) verändert. Zu Beachten ist hierbei, dass diejenigen Felder, die durch eine Datei im Theme benutzt werden, nicht deaktiviert werden sollten, da dann auch das Theme nicht mehr (auf einfachem Wege) auf die Felder zugreifen kann. Die betroffenen Felder können allerdings weiterhin *durch das Theme* ausgeblendet werden.
- Um das Aussehen und die Struktur eines Inhaltstyps weiter zu verändern, lesen Sie bitte [Kapitel 16.2]().
- [#A] **Hinweis: Bei einigen Fällen wird ein Inhaltstyp auf dieser Website auch nur für eine *einzelne* Seite genutzt; für diese Seiten wird nicht der Typ *Einfache Seite* genutzt.** Der Grund dafür liegt darin, dass sich nur so das Seitenbearbeitungsformular anpassen lässt und damit die Benutzerfreundlichkeit (in Bezug auf Website Autoren) für besondere Seiten erhöht wird, da die Struktur bereits festgelegt ist und nicht aus Versehen verändert werden kann. Außerdem kann so die Struktur der Seite leichter im Theme verändert werden.
- Welchem Inhaltstyp eine Seite angehört, können Sie in der [Inhaltsübersicht]([[Inhaltsübersicht]]) einsehen.
- Die Website bedient sich bereits mehreren Inhaltstypen:
- ## Bestehende Inhaltstypen
  id:: 64f5804b-576f-456d-abc1-66a8688f8cb4
	- ### Einfache Seite
		- Dieser Inhaltstyp ist der standardmäßige Inhaltstyp für alle Seiten, die keinem anderen Typ zugeordnet werden können. Er sieht nur einen Seitentitel und einen „Textkörper“ vor, in dem sämtliche Inhalte in einer beliebigen Struktur (welche durch HTML umgesetzt werden muss) präsentiert werden können.
	- ### Artikel
		- Dieser Inhaltstyp ist für Seiten mit zeitkritischen Inhalten gedacht. Im Grunde handelt es sich dabei um eine Seite des Typs *Einfache Seite*, allerdings lassen sich zusätzlich Elemente festlegen, die den Inhalt der Seite kategorisieren: mehr dazu im [Kapitel 9]([[Taxonomie]]). Außerdem erscheint der Zeitpunkt der Veröffentlichung auf einer Artikel-Seite. Desweiteren lässt sich ein Relevanzzeitraum und eine Priorisierung festlegen, deren Effekt bei der [Beschreibung der Seite „Neuigkeiten“](((64f57700-9a38-4b95-9834-bfc8e420f660))) nachzulesen ist.
		- Alle Seiten des Typs Artikel erscheinen unter anderem in der [Ansicht „Berichte“]().
	- ### Projekt
		- Dieser Inhaltstyp ist für Inhalte gedacht, die entweder einen Startzeitpunkt oder einen (weit in der Zukunft liegenden) Endzeitpunkt oder beides haben. Für die Verwendung lesen Sie auch die [Beschreibung der Projektseiten](((64f57766-c81e-44cc-a9e7-5cdabf41fdb2))).
		- Projekte sind ähnlich wie Artikel aufgebaut, mit dem Unterschied der genannten zeitlichen Begrenzung, die im Gegensatz zum Artikel nicht mit dem Veröffentlichungsdatum zusammenhängt. Zusätzlich können Projekte durch eine Schaltfläche als „Schulidentität“ markiert werden. Dies kann nur durch einen Administrator geschehen. Projekte, die als Schulidentität markiert worden sind, erscheinen auf der [Seite „Der GCM“](((64f57626-0c5f-40a9-ae65-2f60591e5327))) als Besonderheit, die den GCM ausmacht und prägt.
	- ### Unterrichtsfach
		- Dieser Inhaltstyp ist für Seiten gedacht, welche über die verschiedenen Fächer an der Schule informieren. Lesen Sie auch die [Beschreibung der Unterrichtsseiten](((64f575c7-d11a-48ca-83e6-7c79e03520ff))). Dazu gibt es mehrere Abschnitte. Der Aufbau der Seiten dieses Typs wird maßgeblich durch das [Theme]([[Das Theme verändern]]) verändert.
		- Einige [Felder]() können nur durch einen Administrator verändert werden. So soll eine fehlerhafte Änderung, die maßgeblich die Funktionsfähigkeit der Seite bestimmt, verhindert werden. Dies ist nötig, da diese Seiten auch durch Benutzer mit niedrigeren Berechtigungen und Anforderungen bearbeitet wird. Die angesprochenen Felder sind: Seitentitel, Stufe. Die Felder werden durch das [Modul]([[Das Modul verändern]]) „GCMofficialModule“ gesperrt.
	- ### Stufen
	  id:: 64f57e9a-915a-4e86-b0cd-359eb23c300c
		- Dieser Inhaltstyp ist für Seiten gedacht, die die jeweiligen Schulstufen und ihre Besonderheiten beschreiben. Lesen Sie dazu die [Beschreibung der Stufenseiten](((64f576d3-2a3d-49b5-963c-8dec2cc3813a))). Eine besondere Rolle spielt hierbei das [Feld]() „Systemname“, welches eine kurze Version des Seitentitels enthalten soll, die anschließend vom [Theme]([[Das Theme verändern]]) und vom CMS anstatt des Seitentitels genutzt wird. Der Systemname erscheint zum Beispiel in dem [URL-Schema der Unterrichtsseiten]().
	- ### Startseite
		- Dieser Inhaltstyp soll die Bearbeitung der Startseite erleichtern. Der Aufbau der Startseite wird mit ihm durch das [Theme]([[Das Theme verändern]]) maßgeblich verändert.
	- ### Standort
	  id:: 64f57ee6-9dfa-4bd0-848e-a90c2a3b0120
		- Dieser Inhaltstyp soll die Bearbeitung der Standortseite erleichtern. Der Aufbau der Standortseite wird mit ihm durch das [Theme]([[Das Theme verändern]]) maßgeblich verändert.
		- Eine besondere Rolle spielt das Feld „Standort“. Hierbei handelt es sich um eine Referenz zu dem Seitenabschnittstyp (siehe unten) „Standort“. Die Verwendung eines Seitenabschnittstyps garantiert, dass alle ‚Orte‘ regelgerecht erstellt werden und gleich aussehen.
	- ### Fehlerseite
		- Dieser Inhaltstyp soll die Bearbeitung einer Fehlerseite (wie der 404-Fehlerseite) erleichtern. Der Aufbau dieser wird mit ihm durch das [Theme]([[Das Theme verändern]]) maßgeblich verändert.
- ## Seitenabschnittstypen
  id:: 64f46814-8758-4012-b88e-7d06b8ccc162
	- Seitenabschnittstypen werden durch das [Modul]() „Paragraphs“ ermöglicht.
	- Im Grunde gleichen sie den Inhaltstypen, mit dem Unterschied, dass es sich nicht um vorgefertigte Seiten sondern eben um vorgefertigte Seitenabschnitte handelt. Seitenabschnittstypen können auch als Inhaltstypen von nicht eigenständigen Unterseiten verstanden werden. Ähnlich den Inhaltstypen ermöglichen auch sie, dass ihre Struktur und ihr Aussehen festgelegt ist und durch das [Theme]() verändert werden kann.
	- Eine Übersicht über alle Seitenabschnittstypen finden Sie im [Bereich „Struktur“ der Benutzeroberfläche](((64f56fc5-43a2-4a01-85b2-cf0a516965e3))) auf der Seite [https://gcm.schule/dev/gcmofficial/admin/structure/paragraphs_type](https://gcm.schule/dev/gcmofficial/admin/structure/paragraphs_type)
	- Seitenabschnittstypen können als Feld vom Typ *Entitätsreferenz-Revisionen* einem Inhaltstypen (in seinem [Seitenbearbeitungsformular](((64f46814-5e6d-4ce3-aeda-0c91acd81873)))) hinzugefügt werden.
	- Ein Beispiel für die Verwendung eines Seitenabschnittstyps finden Sie beim [Inhaltstyp „Standort“](((64f57ee6-9dfa-4bd0-848e-a90c2a3b0120))).