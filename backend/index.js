const express = require('express');
const bodyParser = require('body-parser');
const mysql = require("mysql");

const app = express();

app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

const connection = { 
    host:"xxx",
    database:"xxx",
    user:"xxx",
    password:"xxx"
}
conn = mysql.createConnection(connection);
app.get('/hello', (request, response) => {
return response.send('Hello world');
});
app.get('/getdatum', (request, response) => {
let datum = '13.11.2025'
console.log(datum);
return response.send('datum '+datum);
});
app.get('/getknjige', (request, response) => {
    conn.query("SELECT * FROM knjiga", (error, results) => {
        if (error) throw error;
        return response.send(results);
    })
})

app.post('/addknjiga', (request, response) => {
    const data = request.body;
    console.log(data.autor);
    console.log(data.naslov);
    return response.send('POST metoda -> Add '+data.kontakt+" "+data.ime);
});
app.put('/updateknjiga', (request, response) => {
    const data = request.body;
    console.log(data.autor);
    console.log(data.naslov);
    return response.send('PUT metoda -> Change '+data.kontakt);
});
app.delete('/deleteknjiga', (request, response) => {
    const data = request.body;
    console.log('Delete '+data.id);
    return response.send('Delete '+data.id);
});
app.listen(3000, () => {
console.log("Server running on port 3000");
});