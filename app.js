const express = require('express');
const morgan = require('morgan');
const exhbs = require('express-handlebars');
const path = require('path');
const { urlencoded } = require('express');



const app = express();

// Settings
app.set('port', process.env.port || 3000);
app.set('views', path.join(__dirname, 'views' ));

app.engine('hbs', exhbs({

    defaultLayout:'panelClientes',
    extname:'.hbs'
}))

app.set('view engine','.hbs' );


// middlewares
app.use(morgan('dev'));
app.use(urlencoded({extended: false}));


// static  

app.use(express.static(path.join(__dirname, 'public')));

// rutas
app.use(require('./routes/routes'));

module.exports = app ;


