const express  = require('express');
const {engine} = require('express-handlebars') 
const {router} =require('./routes/routes') 
const path = require('path') 
const {mydb} = require('./database')

const app = express();

app.set('view engine', 'hbs');
app.engine('hbs', engine({
  layoutsDir: path.join(__dirname, 'views/layouts'),
  extname: 'hbs',
  defaultLayout: 'index',
  partialsDir: path.join(__dirname, 'views/partials' )
}));

app.set('views', path.join(__dirname, 'views'))


app.use(express.json())
app.use(router)


 mydb().then
const PORT = process.env.PORT || 3000;

app.listen(PORT, () => {
	console.log(`Server on port ${PORT}`);
});
