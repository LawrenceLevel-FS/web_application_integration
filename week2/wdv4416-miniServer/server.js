import 'dotenv/config';
import express from 'express';
import userRoutes from './routes/userRoutes';
import bodyParser from 'body-parser';

const app = express();

app.use(express.json());
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));

// * Routes * //

app.use('/user', userRoutes);

// * Start * //

app.listen(process.env.PORT, () =>
  console.log(`Example app listening on port ${process.env.PORT}!`),
);