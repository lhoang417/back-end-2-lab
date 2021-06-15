const houses = require('./db.json')
let houseId = 4

module.exports = {
    getHouses: function(req, res){
        res.status(200).send(houses)
    },
    deleteHouse: function(req, res){
        const tgtId = houses.findIndex(function(houseObj){
            return houseObj.id === +req.params.houseId;
        })
        houses.splice(tgtId, 1);
        res.status(200).send(houses);
    },
    createHouse: function(req, res){
        let{address, price, imageURL} = req.body;
        const newHouse = {houseId, address, price, imageURL}
        houses.push(newHouse)
        houseId++
        res.status(200).send(houses)
    },
    updateHouse: function(req, res){
        let {type} = req.body
        const houseID = houses.findIndex(function(houseObj){
        return houseObj.id === +req.params.houseId;
      
       
    })
    if (houses[houseID].price <= 10000 && type === 'minus'){
        houses[houseID].price = 0
        res.status(200).send(houses)
    }else if (type === 'plus'){
        houses[houseID].price += 10000
        res.status(200).send(houses)
    }else if (type === 'minus'){
        houses[houseID].price -= 10000
        res.status(200).send(houses)
    }else {
        res.sendStatus(400)
    }
            
    }
    
}