import express from 'express';
import {pool} from './db.js';

//Routers
import housesRouter from './routers/houses.router.js';
import teachersRouter from './routers/teacher.router.js';
const app = express();

app.use(express.json());
app.use('/houses', housesRouter);
app.use('/teachers', teachersRouter);

const port = 3000;

pool.query("SELECT NOW()")
    .then(result => {
        console.log("Database connected!", result.rows[0]);
    })
    .catch(error => {
        console.error("Database connection failed:", error);
    });

app.get('/', (req, res) => {
    res.status(200).send('Welcome to Hogwarts!');
});

app.listen(port, () => {
    console.log(`Server running on port ${port}`);
});

