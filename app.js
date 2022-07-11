const express = require('express');
const app = express();


app.use(express.static('public')) 

app.get('/home', (req, res, next) => { 
    console.log(__dirname)
    res.sendFile(__dirname + '/views/home.html')
})

app.get('/about', (req, res, next) => { 
    console.log(__dirname)
    res.sendFile(__dirname + '/views/about.html')
})


// solo 1 res por vez
app.get('/works', (req, res, next) => { 
    console.log(__dirname)
    res.sendFile(__dirname + '/views/works.html')
})

app.use((req, res, next) => { // No depende de una url o un metodo
    res.status(404).sendFile(__dirname + '/views/notFound.html')
}) 



app.listen(3000, () => { // este va al final siempre
    console.log('Listening on port 3000')
})