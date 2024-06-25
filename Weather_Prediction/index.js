import express from "express";
import axios from "axios";
import bodyParser from "body-parser";

const API_KEY = "Your API Key"; // change this to your API key
const app = express();
const port = 3000;

// Middleware
app.use(express.static("public"));
app.use(bodyParser.urlencoded({ extended: true }));

// Store the location received from the form
let place = "";

// Middleware to capture the location from POST request
function getCity(req, res, next) {
    place = req.body.weather; // assuming input name is 'weather'
    next();
}

app.use(getCity);
// console.log(place);
// Routes
app.get("/", (req, res) => {
    res.render("index.ejs", { data: null });
});

app.post("/", async (req, res) => {
    try {

        const response = await axios.get(`http://api.weatherapi.com/v1/current.json?key=${API_KEY}&q=${place}&aqi=no`);
        if (response.status === 200) {
            const result =  response.data["current"];
            // console.log(result);
            res.render("index.ejs", { data: result });

        } else if(response.status === 400){
            res.render("index.ejs", {data:null});
        }
        else {
            res.render("index.ejs", { data: null });
        }
    } catch (error) {
        console.error("Error fetching weather data:", error.message);
        res.render("index.ejs", { data: null });
    }
});


app.listen(port, () => {
    console.log(`Server is running on http://localhost:${port}`);
});
