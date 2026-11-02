# Pseudokode

Alle endpoints er `async` og anvender `try/catch` til fejlhåndtering. Hvis der opstår en uventet fejl, udskrives fejlen i terminalen og serveren returnerer `status 500` med en fejlbesked `Internal Server Error`


# GET alle

Dette gælder: `GET /houses`, `GET /teachers`, `GET /students`, `GET /courses`

Hent alle rækker fra den relevante tabel.

Returner listen med status 200

Hvis der opstår en uventet fejl: Returner status 500


# GET med id

Dette gælder: `GET /houses/:id`, `GET /teachers/:id`, `GET /students/:id`, `GET /courses/:id`

Læs id fra URL'en
Find rækken med den angivne id

Hvis rækken ikke findes:
Returner status 404 med fejlbesked "House/Teacher/Student/Course not found"

Ellers returner med status 200

Hvis der opstår en uventet fejl: Returner status 500


# POST

Dette gælder: `POST /teachers`, `POST /students`, `POST /courses`, `POST /courses/:id/students`

Læs felterne fra request body:
teachers: (name, house_id)
students: (name, year, house_id)
courses: (name, teacher_id)

Indsæt rækken i tabellen med RETURNING *
Returner rækken med status 201

Hvis der opstår en uventet fejl: Returner status 500


# PUT 

Dette gælder: `PUT /teachers/:id`, `PUT /students/:id`, `PUT /courses/:id`, `PUT /courses/:id/teacher`

Læs ID fra URL'en og de nye værdier fra body
Opdater rækken med den ønskede ID og få den opdaterede række tilbage

Hvis ID'en ikke bliver fundet eller rækken ikke er opdateret
Returner med status 404 med fejlbesked: "House/Teacher/Student/Course not found"

Ellers returner med status 200

Hvis der opstår en uventet fejl: Returner stauts 500


# DELETE

Dette gælder: `DELETE /teachers/:id`, `DELETE /students/:id`, `DELETE /courses/:id`, `DELETE /courses/:id/student/:student_id`

Læs ID fra URL'en 
Slet rækken med den ønskede ID og få den slettede række tilbage

Hvis ID'en ikke bliver fundet eller rækken ikke er opdateret
Returner med status 404 med fejlbesked: "House/Teacher/Student/Course not found"

Ellers returner med status 204

Hvis der opstår en uventet fejl: Returner stauts 500