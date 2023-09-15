- {{renderer :tocgen2}}
	- type:: toc
	  chapter:: 5
- Um die Gestalt und Funktionsweise der Schulwebsite umzusetzen, wird das Content Management System (CMS) „[Drupal](https://drupal.org/)“ genutzt.
- Das Backend der Website, mithilfe derer sie verändert werden kann, lässt sich dabei in zwei Bereiche gliedern: die **Benutzeroberfläche** und das **Dateisystem**. Während die Benutzeroberfläche durch einen Browser online unter der Adresse [https://gcm.schule/dev/gcmofficial/user](https://gcm.schule/dev/gcmofficial/user) zu erreichen ist, ist das Dateisystem nur durch einen FTP-Clienten wie [FileZilla](https://filezilla-project.org/index.php) zu erreichen.
- Neben dem Backend besteht die Website zudem aus einer Datenbank, die von Drupal automatisch verwaltet wird. Hier werden unter anderem (Seiten-)Einstellungen, die textuellen Inhalte auf den Seiten und die angemeldeten Benutzer gespeichert.
- Die eigentlichen Inhalte auf den Seiten werden neben der Datenbank auch im Dateisystem des Servers gespeichert; dabei handelt es sich um unterschiedliche Informationen und nicht um eine Kopie der Datenbank.
- ## Benutzeroberfläche
	- Mithilfe der Benutzeroberfläche können (ausschließlich) angemeldete Benutzer den **Inhalt**, die **Einstellungen** und geringfügig das **Aussehen** und die **Verhaltensweisen** der Website ändern. Dazu gibt es mehrere Bereiche, auf die über ein Menü zugegriffen werden kann: ![Menü]()
	- ### Der Bereich ![„Inhalt“]()
	  id:: 64f56fb1-469d-4d81-a0c0-a45926411390
		- Hier lässt sich der Inhalt der Website verändern, also alle Informationen die nicht seitenübergreifend sondern nur spezifisch sind. Dazu gehören textuelle und mediale Inhalte. Mehr dazu erfahren Sie im [Kapitel 7]([[Inhaltsübersicht]]) und [Kapitel 10]([[Inhaltsänderung]]).
	- ### Der Bereich ![„Struktur“]()
	  id:: 64f56fc5-43a2-4a01-85b2-cf0a516965e3
		- Hier lässt sich der Aufbau der Website verändern, seitenübergreifende Informationen verändern und die Regeln von automatisch generierten Seiten anpassen: Mehr dazu finden Sie im [Kapitel 13]([[Aufbau der Website verändern]]) und [Kapitel 14]([[Ansichten: Inhalte gefiltert anzeigen]]). Außerdem findet sich der Bereich „Taxonomie“ hier: Sehen Sie dazu [Kapitel 9]([[Taxonomie]]).
	- ### Der Bereich ![„Design“]()
		- Hier kann das Aussehen der Website, also die Art, wie die Inhalte dem Nutzer präsentiert werden, angepasst werden
		- Dazu wird für die Website und die Benutzeroberfläche jeweils ein sogenanntes „Theme“ ausgewählt, welches das Aussehen steuert, mehr dazu erfahren Sie im [Kapitel 15.1](). Die Auswahl des Themes erfolgt über eine Schaltfläche: ![dieses Theme auswählen](). Bevor das Theme für die Website ausgewählt werden kann, muss es zunächst installiert werden. Das derzeitige Theme, das im weiteren nur abgeändert werden sollte, ist bereits installiert und aktualisiert sich automatisch, wie in [Kapitel 15]([[Themes, Module & Technologien]]) beschrieben. Sollte dennoch ein anderes Theme ausgewählt werden, denken Sie daran, es zunächst zu installieren; die nicht installierten Themes befinden sich im unteren Abschnitt des Bereichs: ![nicht installierte Themes]()
		- Das Theme der Benutzeroberfläche, das „Verwaltungs-Theme“ ist bereits festgelegt und aktualisiert sich ebenfalls automatisch. Für die Auswahl eines anderen Verwaltungsthemes beachten Sie bitte [Kapitel 16.3]()
	- ### Der Bereich ![„Erweitern“]()
		- Hier können Module der Seite hinzugefügt werden, welche die Funktionalität dieser erweitern oder verändern. Die Installation eines nicht installierten Moduls geschieht über eine Schaltfläche: ![Schaltfläche](). Ein eigenes Modul für diese Website ist bereits installiert und aktualisiert sich wie in [Kapitel 15]([[Themes, Module & Technologien]]) beschrieben. Ebenfalls können sie hier auf Updates geprüft werden und aktualisiert werden. Mehr dazu im [Kapitel 15.2]() und [Kapitel 17]([[Das Modul verändern]]). Auch verfügbare, offizielle Drupal-Updates werden hier angezeigt.
	- ### Der Bereich ![„Konfiguration“]()
	  id:: 64f5701f-9136-48f0-8c35-481f6ab7074d
		- Hier finden sich Einstellungen, die die gesamte Website betreffen, beziehungsweise weder einer einzelnen Seite noch einer [Seitengruppe]([[Inhaltstypen]]) zugeordnet werden kann, und Fehlerberichte.
	- ### Der Bereich ![„Benutzer“]()
		- Hier findet sich die Benutzerverwaltung: Es können Benutzer erstellt, gelöscht und ihnen bestimmte Rechte verliehen werden. Mehr dazu im [Kapitel 12]([[Benutzerverwaltung]]).
- ## Dateisystem
	- Das Dateisystem ermöglicht einen tieferen Eingriff in die **Funktionsweise**, die **Verhaltensweisen** und das **Aussehen** der Website, als dass es die Benutzeroberfläche ermöglicht. Hier liegen auch alle Steuerdateien des CMS und Inhalte der einzelnen Seiten.
	- Im top-level Verzeichnis finden sich dazu mehrere Ordner und Dateien (siehe Abb. 5.1).
	- Im Ordner „site“ befinden sich Informationen zu spezifischen Seiten, sowie alle medialen Inhalte auf den Seiten. Dieser Ordner wird automatisch von Drupal verwaltet und sollte manuell nicht verändert werden.
	- Im Ordner „drupal“ befinden sich alle Dateien, die das CMS steuern und zur Funktionsweise und dem Auftritt der Website im Netz beitragen. Diese Dateien agieren als das eigentliche Framework und sollten nur durch offizielle Updates verändert werden.
	- [#A] Im Ordner „themes“ befinden sich Dateien, die das Aussehen der Website steuern. Außerdem befinden sich hier Dateien, die die Funktionsweise des Frameworks/die Verhaltensweise der Website so abändern oder erweitern, dass sie den Aufbau der Website, wie sie online einzusehen ist, ändern. Mehr dazu erfahren Sie im [Kapitel 15.1]() und [Kapitel 16]([[Das Theme verändern]])
	- [#A] Im Ordner „modules“ befinden sich Dateien, die die Funktionsweise des Frameworks/die Verhaltensweise der Website abändern oder erweitern. Teils überschneiden sie sich mit den Dateien im Ordner „themes“, mehr dazu im [Kapitel 15.3](). Die Module werden von anderen Entwicklern der Drupal-Community bereitgestellt. Außerdem befindet sich hier ein eigenes Modul für diese Website. Mehr dazu im [Kapitel 15.2]() und [Kapitel 17]([[Das Modul verändern]]).
	- Auf die weiteren Ordner wird im Folgenden nicht eingegangen. Sie werden teilweise von Drupal automatisch verwaltet und müssen und sollten in der Regel nicht manuell verändert werden.