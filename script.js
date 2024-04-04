const express = require("express");
const bodyParser = require("body-parser");
const request =require("request");
const https = require("https");

app.use(bodyParser.urlencoded({extended:true}));
const app = express();
app.use(express.static('public'));

app.get("/", function (req, res) {
    res.sendFile(__dirname + "/index.html");
})

app.post("/", function (req, res) {
            const name = req.body.name;
            const email = req.body.email;
            const mobile = req.body.mobile;
            console.log(name);
            const data = {
                members: [{
                    email_address: email,
                    status: "subscribed",
                    merge_fields: {
                        FNAME: name,
                        LNAME: name
                    }
                }]
            }

            let jsonData = JSON.stringify(data);
            const url = "https://us20.api.mailchimp.com/3.0/lists/0ffc2d9516";
            const options = {
                method: "POST",
                auth: "serah:f4ed3c7e68ef3bf586871a796a9ddbc3-us20"
            }

            const request = https.request(url, options, function (response) {
                response.on("data", function (data) {
                    console.log(JSON.parse(data));
                    if (response.statusCode === 200) {
                        res.send("Subscription successful");
                    }

                })
                
            })

            request.write(jsonData);
    request.end();
        })

            app.listen("3000", function () {
                console.log("Port 3000 activated");
            })
