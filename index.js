const express = require('express')
//const register = require('/.register')
const app = express()
const port = 3000

app.set('view engine', 'ejs')


app.use(express.json())

app.get('/register',(req, res) => {
    res.render('register')
})
app.post('/api/v1/register', (req, res) => {
    const {email, password} = req.body
    res.json([email, password])
})


const internalServerhandlerError =(err, req, res,next) => {
    console.log(err);
    res.status(500).json({
        status: 'fail',
        errors: err.massage
    })
}
const notFoundHandler =(req, res,next) => {
    return res.status(400).json({
        status: 'fail',
        errors: "Not Found"
    })
}

app.use(internalServerhandlerError)
app.use(notFoundHandler)


app.listen(port, () => console.log('Example listening on at http: ${port}'))