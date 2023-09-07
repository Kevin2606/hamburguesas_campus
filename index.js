import express from 'express';
import dotenv from 'dotenv';
import { config as configACL, authorize as authorizeACL} from 'express-acl';
import passportConfig from './config/passportConfig.js';
import chefRoute from './routes/chefsRoute.js';
import ingredientesRoute from './routes/ingredientesRoute.js';
import hamburguesasRoute from './routes/hamburguesasRoute.js';

import authRoute from './routes/authRoute.js';

dotenv.config();

const app = express();

configACL({
    filename: 'nacl.json',
    baseUrl: '/',
    roleSearchPath: 'user.rol',
    denyCallback: (res) => res.status(403).json({
      message: 'No tienes permisos para acceder a este recurso'
    })
});

app.use(express.json());
app.use('/auth', authRoute)
app.use(passportConfig.initialize());
app.use(passportConfig.authenticate('bearer', { session: false }), authorizeACL);
app.use('/chefs', chefRoute);
app.use('/ingredientes', ingredientesRoute);
app.use('/hamburguesas', hamburguesasRoute);

app.listen(process.env.PORT, () => {
    console.log(`Server listening on http://localhost:${process.env.PORT}`);
});