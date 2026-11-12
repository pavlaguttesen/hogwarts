import express from 'express';

//Routers
import housesRouter from './routers/houses.router.js';
import teachersRouter from './routers/teachers.router.js';
import studentsRouter from './routers/students.router.js';
import coursesRouter from './routers/courses.router.js';
import errorhandler from './errorhandling/errorhandler.js';
const app = express();

app.use(express.json());
app.use('/houses', housesRouter);
app.use('/teachers', teachersRouter);
app.use('/students', studentsRouter);
app.use('/courses', coursesRouter);

app.use(errorhandler)

const port = 3000;

app.listen(port, () => {
    console.log(`Server running on port ${port}`);
});

