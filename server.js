const express = require('express')
const cors = require('cors')

const app = express()

var corOptions = {
    origin: 'https://localhost'
}




//middleware for accessing the json on the body
app.use(cors(corOptions))

app.use(express.json())

app.use(express.urlencoded({ extended: true}))


// Routes

const router = require('./routes/productRouter.js')
app.use('/api/products', router)

//testing api

app.get('/', (req, res) => {
       res.json('hello from api')
})

//port
const PORT = process.env.PORT || 8080

 //server
app.listen(PORT, () => {
      console.log(`server is running on port ${PORT}`)
})