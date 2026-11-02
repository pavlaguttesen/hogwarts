# Hogwarts Course Management System

Dette projekt er en REST API til administration af Hogwarts huse, undervisere, elever og kurser

API'et er udviklet med Node.js, Express og PostgreSQL. Dette gør det muligt for at hente, oprette, opdatere og slette data gennem forskellige endpoints


# Teknologier

- Node.js
- Express
- PostgreSQL
- pg (Node PostSQL Library)
- dotenv


## Installation og opstart
1. Klon projektet fra Github
[https://github.com/pavlaguttesen/hogwarts.git]

2. Installer npm
``` npm install ```

3. Opret en .env-fil ud fra .env.example, og indsæt dine egne databaseoplysninger.

4. Opret databasen i PostgreSQL, og kør SQL-filerne i database-mappen.

5. ``` npm run dev ```

Serveren kører på `https://localhost:3000`


## API endpoints

### Houses

| Metode | Router | Beskrivelse |
| ------ | ------ | ----------- |
| `GET`  | /houses | Henter alle huse |
| `GET`  | /houses/:id | Henter ét hus |

### Teachers

| Metode | Router | Beskrivelse |
| ------ | ------ | ----------- |
| `GET` | /teachers | Henter alle undervisere |
| `GET` | /teachers/:id | Henter én underviser |
| `POST` | /teachers | Opretter en underviser |
| `PUT` | /teachers/:id | Opdaterer en underviser |
| `DELETE` | /teachers/:id | Sletter en underviser | 

### Students 

| Metode | Router | Beskrivelse |
| ------ | ------ | ----------- |
| `GET` | /students | Henter alle elever |
| `GET` | /students/:id | Henter én elev |
| `POST` | /students | Opretter en elev |
| `PUT` | /students/:id | Opdaterer en elev |
| `DELETE` | /students/:id | Sletter en elev | 

### Courses

| Metode | Router | Beskrivelse |
| ------ | ------ | ----------- |
| `GET` | /courses | Henter alle fag |
| `GET` | /courses/:id | Henter ét fag |
| `POST` | /courses | Opretter et fag |
| `PUT` | /courses/:id | Opdaterer fagets navn |
| `PUT` | /courses/:id/teacher | Skifter underviser i et fag |
| `POST` | /courses/:id/student | Opretter en elev i et fag |
| `DELETE` | /courses/:id/student | Sletter en elev fra et fag | 
| `DELETE` | /courses/:id | Sletter et fag | 


## database

Projektet bruger PostSQL og består af fem tabeller:

- houses - Indeholder Hogwarts fire huse
- teachers - Indeholder undervisere
- students - Indeholder eleverne
- courses - Indeholder fagene
- course_students - forbinder elever og fag

Der bruges `foreign keys` til at forbinde undervisere og elever til deres huse samt fag med deres undervisere.

Tabellen `course_student` bruges til relationer mellem elever og fag, hvor de begge to kan have flere relationer.


## Test af API

API'et kan testes med Insomnia.

1. Start serveren med `npm run dev`.
2. Åbn Insomnia.
3. Opret requests med de relevante HTTP-metoder og endpoints fra
oversigten.
4. Send requests og kontrollér statuskoder og svar fra API'et.

Ved POST og PUT sendes data som JSON i request body.


## Projektstruktur

Projektet er opdelt i mapper og filer:

- controllers/ - håndterer request og responses
- repos/ - indeholder SQL forspørgelser til databasen
- routers/ - indeholder API'ets routes
- database/ - indeholder SQL filererne til tabeller
- .env.example - viser hvilke miljøvariabler skal bruges
- db.js - opretter forbindelse til PostgreSQL
- pseudo.md - beskriver logikken bag API'ets endpoints
- server.js - starter Express-serveren