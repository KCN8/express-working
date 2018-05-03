const express = require('express')
const cors = require('cors')
const bodyParser = require('body-parser')
const data = require('./data.json')
const PORT = process.env.PORT || 3000
const app = express()

app.use(cors())
app.use(bodyParser.json())

function filterById(data, id){
	return data.filter(instructor => instructor.ID == id)
}

app.get('/', (req, res) => {
	res.json(data)
})

app.get('/:id', (req, res) => {
	let result = filterById(data, req.params.id)
	if(!result[0]){
		res.status(404).json({
			error: {
				message: 'No record found!'
			}
		})
	} else {res.json(result)}
})

app.listen(PORT, () => console.log('working'))