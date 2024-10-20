import express, { json } from 'express';
import morgan from 'morgan';
import { join, dirname } from 'path'; 
import { fileURLToPath } from 'url';
import { engine } from 'express-handlebars';
import Gastosf from './Routes/gastosfijos.routes.js'; 


// Inicialización 
const app = express();
const __dirname = dirname(fileURLToPath(import.meta.url));

// Usa el router para manejar las rutas de gastos fijos
app.use(Gastosf);


// Configuración 
app.set('port', process.env.PORT || 3000);
app.set('views', join(__dirname, 'views'));
app.engine('.hbs', engine({
    defaultLayout: 'main', 
    layoutsDir: join(app.get('views'), 'layouts'),
    partialsDir: join(app.get('views'), 'partials'), 
    extname: '.hbs'
}));
app.set('view engine', 'hbs');

// Middleware 
app.use(morgan('dev'));
app.use(express.urlencoded({ extended: false }));
app.use(express.json()); 

// Routes 
app.get('/', (req, res) => {
    res.render('index');
});

// Archivos públicos 
app.use(express.static(join(__dirname, 'public')));

// Ejecutar el servidor 
app.listen(app.get('port'), () => {
    console.log(`Server on port ${app.get('port')}`); 
});
