# Aufgaben-Template
Das Template besteht aus folgenden Dateien:
- einem Github-Workflow in `.github/workflows/js-pipeline.yml`
- einer Configuration für Github Classroom `.github/classroom/autograding.json`
- der README
- einem Template für Aufgaben: `exercises.js`
- Templates für Testssuites: `tests/exercise1.test.js` und `tests/exercise2.test.js`
- einer jest Konfigurationsdatei (`jest.config.js`)

# To-Dos
1. Beschreiben von Aufgaben in `README.md` und löschen des Template-Textes
2. Befüllen der Datei in welcher die TNs die Aufgaben erledigen können (siehe `exercises.js`).
3. Musterlösungen für die Aufgaben in `exercises.js` hinzufügen 
4. Befüllen der Test-Dateien (siehe `tests/`)
5. Löschen nicht benötigter Dateien und Kommentare
6. Anpassen der `autograding.json`:
    1. Anpassen der Testnamen
    2. Anpassen des `run`-Kommandos 
        - für JS: `jest excercise-name.test.js`
    3. Anpassen der `points` (Punkte in Github Classroom pro Aufgabe)

# Testing-Frameworks
- für JavaScript wird `jest` genutzt

## JS-Unittesting mit jest
1. Jest nutzt eine Konfigurationsdatei (`jest.config.js`). Diese muss im Repo verbleiben und nicht geändert werden.
2. Exportieren der zu testenden Module aus der `exercises.js`-Datei via  `module.exports`
2. Importieren der zu testenden Module in die jeweiligen Test-Dateien via `require`.
3. Tests werden mit Hilfe der `test()`-Funktion geschrieben (siehe `tests/exercises.test.js` im Repo)
4. Es können mehrere Testsuites durch Erstellen mehrerer Testdateien genutzt werden. Es empfiehlt sich für die Nutzung in der `autograding.json`jeden Test in eine eigene Testsuite zu verpacken.
5. Jest verwendet `toBe()`oder `toStrictEqual()` um Gleichheit zu testen.
6. Falls TN eine bestimmte Funktion nutzen sollen, kann `spyOn()` verwendet werden. Mehr Infos dazu [hier](https://codewithhugo.com/jest-fn-spyon-stub-mock/).

# Notion-Link
https://www.notion.so/techstarter/Github-Classroom-3acc378d53bc4156aa464b8259854431

# Sample Aufgabenstellung für TN:
## NOTIZ AN TEACHING TEAM: BITTE LÖSCHEN
In der Datei `exercise.js` befinden sich die Lösungen zu den Aufgaben. Diese können z.B. als Musterlösung genutzt werden, müssen allerdings gelöscht werden bevor Aufgabe gestellt wird! 

## Lösen der Aufgaben
Klont dieses Repo lokal und bearbeitet die Aufgaben in eurem Code-Editor. Sobald ihr die Aufgaben gelöst habt, committed euren Code zu eurem Aufgaben-Repo in Github und schaut unter `Actions`nach ob alle Aufgaben richtig gelöst wurden. **WICHTIG: Erst alle Aufgaben lösen bevor ihr euren Code committed und zum Repo pusht. Ansonsten wird die Überprüfung der Lösungen nicht funktionieren.**

Ein Commit und Push zum Repo zählt als Abgabe. Unter `Actions` in eurem Github-Repo bekommt ihr direktes Feedback welche Aufgaben ihr richtig und welche nicht richtig gelöst habt. Falls einige Aufgaben nicht richtig gelöst wurden, kann, innerhalb des Abgabezeitraums, nochmals abgegeben werden.

## Aufgaben
Die Aufgaben befinden sich in der Datei `exercises.js` und müssen dort auch gelöst werden. **Dies ist die einzige Datei, die ihr verändern dürft.** Zur Übersicht sind im Folgenden hier nochmal alle Aufgaben aufgelistet: 