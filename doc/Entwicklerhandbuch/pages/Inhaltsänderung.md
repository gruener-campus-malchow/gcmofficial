- {{renderer :tocgen2}}
	- type:: toc
	  chapter:: 10
- Die Änderung des Inhalts auf den verschiedenen [Seiten]([[Alle Seiten o. Aufbau Website]]) geschieht durch ein Bearbeitungsformular.
- Jede eigenständige, nicht automatisch generierte Seite, besitzt ein solches Formular. Der Aufbau dessen wird von dem [Inhaltstyp]([[Inhaltstypen]]) der Seite bestimmt. Die Felder des Inhaltstyps übertragen sich auf die Felder des Bearbeitungsformulars der Seite.
- Die Bearbeitungsformulare der Seiten sind durch zwei Wege erreichbar:
	- Über die Schaltfläche „Bearbeiten“ in der [Inhaltsübersicht]([[Inhaltsübersicht]]) ![Schaltfläche „Bearbeiten“]()
	  logseq.order-list-type:: number
	   Suchen Sie dazu die jeweilige Seite in der Liste oder mithilfe des Filters oben auf der Seite.
	- Über die Seite selbst: Öffnen Sie die gewünschte Seite, während Sie angemeldet sind. Im oberen Teil der Seite finden Sie Schaltflächen. Klicken Sie auf die Schaltfläche „Bearbeiten“, um zu dem Formular zu gelangen. ![Schaltfläche „Bearbeiten“]()
	  logseq.order-list-type:: number
- Füllen Sie das Formular aus oder ändern die angezeigten Felder, um auch den Inhalt der Seite zu ändern.
- Um die Änderungen zu sichern, klicken Sie im unteren Bereich des Formulars auf die Schaltfläche ![„Speichern“](). Mit einem Klick auf die Schaltfläche „Preview“ können Sie sehen, wie die Seite nach den Änderungen aussehen würde. Bitte beachten Sie, dass die Vorschau nicht ganz dem tatsächlichen Aussehen entspricht, da die Seite für nicht angemeldete Benutzer anders aussehen kann.
- [#A] Dass die Änderungen gespeichert sind, heißt nicht automatisch, dass die Änderungen bereits veröffentlicht, also auch für nicht angemeldete Nutzer sichtbar sind. Es wird lediglich eine neue „Revision“ erstellt. Um die Änderungen für alle sichtbar zu machen, muss die neue Revision veröffentlicht werden. Dies geschieht im Rahmen des Arbeitsablaufs „Editoral“ und erfordert weitere Schritte (siehe unten).
- ## Arbeitsabläufe
  id:: 64f46814-c36a-4efb-90d1-01413210b08c
	- Die Veröffentlichung von Inhalten auf der Website wird durch Arbeitsabläufe koordiniert. Unterschiedliche Teilnehmer – angemeldete Benutzer – in diesen Arbeitsabläufen übernehmen bestimmte Aufgaben, um den Inhalt schließlich zu veröffentlichen.
	- Die Arbeitsabläufe werden durch das [Modul]([[Themes, Module & Technologien]]) „Workflow“ ermöglicht.
	- Eine Übersicht über alle Arbeitsabläufe findet sich auf der Website: [https://gcm.schule/dev/gcmofficial/admin/config/workflow/workflows](https://gcm.schule/dev/gcmofficial/admin/config/workflow/workflows).
	- Ohne einen Arbeitsablauf könnten Inhalte direkt und von der gleichen Person, die den Inhalt verfasst hat, veröffentlicht werden. Um die Qualität und Korrektheit der Beiträge zu garantieren, benutzt diese Website deswegen den Arbeitsablauf „Editoral“. Dieser tritt vor allem auf den Unterrichtsseiten in Kraft.
	- ### Arbeitsablauf „Editoral“
		- Der Arbeitsablauf „Editoral“ besteht aus mehren Stadien. Das aktuelle Stadium einer jeden eigenständigen, nicht automatisch generierten Seite, kann unten in ihrem Bearbeitungsformular an dem Feld „Aktueller Status“ abgelesen werden. Der Ablauf sieht folgende Stadien vor ([Teilnehmer]([[Benutzerverwaltung]]) **hervorgehoben**):
			- *Entwurf*: Wenn eine Seite durch einen **Autor** geändert oder neu erstellt wird, wird eine neue „Revision“ (oder auch „Update“) im Stadium *Entwurf* erstellt.
			  logseq.order-list-type:: number
			- *Revision*: Wenn der Entwurf durch den jeweiligen **Autor** der neuen „Revision“ *zur Revision freigegeben wird*, ändert sich das Stadium zu *Revision*. Das gibt den Inhalt für die **Moderatoren** frei.
			  logseq.order-list-type:: number
			- *Veröffentlicht*: Wenn ein **Moderator** die „Revision“ anschließend freigibt, wird die „Revision“ schließlich *veröffentlicht*.
			  logseq.order-list-type:: number
			- *Archiviert*: Nach der *Veröffentlichung* können **Moderatoren** den Inhalt wieder *archivieren*, beziehungsweise aus dem Stadium *Archiviert* wiederherstellen.
			  logseq.order-list-type:: number
	- Damit ein Inhalt von einem Stadium in ein anderes wechseln kann, wurden „Übergänge“ definiert. Diese steuern, wie die Stadien geändert werden dürfen. Desweiteren lassen sich Teilnehmer für verschiedene Übergänge festlegen. Lesen Sie dazu [Kapitel 12.4](). Nur wenn ein Teilnehmer das Recht an einem Übergang besitzt, kann er das Stadium, wie durch den Übergang beschrieben, ändern.
	- Um das Stadium einer „Revision“ nun zu ändern, wählen Sie bitte unten im Bearbeitungsformular der betroffenen Seite im Feld „Ändern in“ das neue Stadium aus und **speichern** die Änderung. Eine Übersicht über alle neuen, noch nicht veröffentlichten Inhalte findet sich zudem in der [Inhaltsübersicht]([[Inhaltsübersicht]]) im Tab [Inhalt/Moderierter Inhalt](https://gcm.schule/dev/gcmofficial/admin/content/moderated). Auch werden alle **Moderatoren** über neue,  nicht veröffentlichte „Revisionen“ per Email informiert. Die Einstellung dazu findet sich auf der Seite [https://gcm.schule/dev/gcmofficial/admin/config/workflow/notifications](https://gcm.schule/dev/gcmofficial/admin/config/workflow/notifications).
	- Alle Stadien (genannt „Status“) und Übergänge finden sich in dem Bearbeitungsformular des Arbeitsablaufs.