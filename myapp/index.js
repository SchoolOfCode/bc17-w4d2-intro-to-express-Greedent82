//importing the express function from express 
import express from 'express'

//express is now getting shoved in a variable
const app = express()
//idk, refers to whatever localhost port it is
const port = 3000

//uses whatever 'get' is within the express function and feeds it in whatever parameters 'get' needed (/ , req, and res)
app.get('/', (req, res) => {
    //sends response of hello world
  res.send('Hello World!')
})
//???
app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})