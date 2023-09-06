import express from 'express';
import dotenv from 'dotenv';
import chefRoute from './routes/chefsRoute.js';
import ingredientesRoute from './routes/ingredientesRoute.js';
import hamburguesasRoute from './routes/hamburguesasRoute.js';

dotenv.config();

const app = express();

app.use(express.json());
app.use('/chefs', chefRoute);
app.use('/ingredientes', ingredientesRoute);
app.use('/hamburguesas', hamburguesasRoute);

app.listen(process.env.PORT, () => {
    console.log(`Server listening on http://localhost:${process.env.PORT}`);
});