const express  = require('express');
const {engine} = require('express-handlebars') 
// import indexRoutes from './routes/routes'
const path = require('path') 

const app = express();

app.set('view engine', 'hbs');
app.engine('hbs', engine({
  layoutsDir: path.join(__dirname, 'views/layouts'),
  extname: 'hbs',
  defaultLayout: 'index'
}));

app.set('views', './views');

app.get('/', (req,res) =>{
    res.render('index')
})
app.use(express.json())
// app.use(indexRoutes)

const PORT = process.env.PORT || 3000;

app.listen(PORT, () => {
	console.log(`Server on port ${PORT}`);
});
