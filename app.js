const express = require('express');
const morgan = require('morgan');
const mongoose = require('mongoose');
const blogRoutes = require('./routes/blogRoutes')


//express app
const app = express();

//connect to mongoDB
const dbURI = 'mongodb+srv://Richey14:Richey1989@ninja-cluster.rswgjzn.mongodb.net/ninja-data?retryWrites=true&w=majority'

mongoose.connect(dbURI, { useNewUrlParser: true, useUnifiedTopology: true })
    .then((result) => app.listen(3000), console.log('connected...'))
    .catch((err) => console.log(err));

// register view engine
app.set('view engine', 'ejs');

//middleware & static files
app.use(morgan('dev'))
app.use(express.static('public'))
app.use(express.urlencoded({ extended: true }))

//mongoose and mongo  sandbox routes
/* app.get('/add-blog', (req, res) =>{
    const blog = new Blog({
        title: 'new blog 2',
        snippet: 'being a fulltime blogger',
        body: 'the challenges of being a fulltime blogger'
    })

    blog.save()
        .then((result) => {
            res.send(result)
        })
        .catch((err) => {
            console.log(err);
        });
})

app.get('/all-blogs', (req, res) => {
    Blog.find()
        .then((result) => {
            res.send(result);
        })
        .catch((err) => {
            console.log(err);
        })
})

app.get('/single-blog', (req, res) => {
    Blog.findById('6304e2b25f1f82384d8b26bc')
    .then((result) => {
        res.send(result);
    })
    .catch((err) => {
        console.log(err);
    })
}) */

// explaining middleware and next() function... not for the app
/* app.use((req, res, next) => {
    console.log('req made');
    console.log('host: ', req.hostname);
    console.log('path: ', req.path);
    console.log('method: ', req.method);
    next();
}) */

// listen for requests
app.get('/', (req, res) =>{
    res.redirect('/blogs');
}) 

app.get('/about', (req, res) =>{
    res.render('about', { title: 'About' });
}) 

// blog routes
app.use('/blogs',blogRoutes)



//redirects
app.get('/about-us', (req, res) =>{
    res.redirect('/about');
}) 

// 404 page
app.use((req, res) =>{
    res.status(404).render('404', { title: 'Not found' });
}) 