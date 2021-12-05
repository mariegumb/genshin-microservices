const express = require("express");
var cors = require('cors')

const nations = [
{
    "id": 1,
    "name": "Inazuma",
    "element": "Electro",
    "archon": "Baal"
}, 
{
    "id":2,
    "name": "Liyue",
    "element": "Geo",
    "archon": "Morax"
},
{
    "id":3,
    "name": "Mondstadt",
    "element": "Anemo",
    "archon": "Barbatos"
}
]
 		
const app = express();
app.use(cors())

app.listen(3000, () => {
 console.log("Server running on port 3000");
});

app.get("/api/nations", async (req, res, next) => {
    console.log("Getting all nations");
    res.json(nations);
});

app.get("/api/nations/:id", async (req, res, next) => {
    const id = parseInt(req.params.id)
    console.log("Getting nation :: ", id);

    const nation = nations.find(nation => nation.id === id)

    if(nation){
        res.json(nation);
    } else {
        res.status(404).send('nation not found!');
    }
});

