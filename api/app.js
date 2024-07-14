import express from 'express'

const app = express()

app.use('/welcome',(req, res) => {
    res.send('Welcome')
})

app.listen(8000, () => {
    console.log('Server is running on port 8000')
})