const express = require('express')
const bodyParser = require('body-parser')

const app = express()
const port = process.env.PORT || 3000

let helpers = []

app.use(express.static('static'))


app.use(bodyParser.urlencoded({ extended: false }))
app.use(bodyParser.json())

app.post('/helper', helper)
app.get('/helper-list', helperList)
app.get('/clear', clear)

app.listen(port, () => console.log(`Example app listening at http://localhost:${port}`))


function helper(request, response)  {  
  const { position } = request.body
  
  helpers.push({
  	position: position
  })

  response.status(200).send()
}


function helperList(request, response)  {
  response.status(200).json(helpers)
}

function clear(request, response)  {
  helpers = []
  response.status(200).send()
} 
