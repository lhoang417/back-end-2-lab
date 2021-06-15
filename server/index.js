const express = require('express');
const cors = require('cors');
const app = express()
const ctrl = require('./controller');
const { getHouses, deleteHouse, createHouse, updateHouse } = ctrl;
const dataBase = require('./db.json')

app.use(express.json());
app.use(cors());

app.get('/api/houses', getHouses)
app.delete('/api/houses/:houseId', deleteHouse)
app.post('/api/houses', createHouse)
app.put('/api/houses/:houseId', updateHouse)



const live_server = 4004
app.listen(4004, function (){ console.log(`Server running on ${live_server}`)})