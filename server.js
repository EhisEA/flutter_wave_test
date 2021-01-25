var express = require('express');
var app = express();

const Ravepay = require("flutterwave-node");
 
const rave = new Ravepay("PUBLIC_KEY", "SECRET_KEY",  true);
 
const tokenCharge = async () => {
    rave.Card.charge(
        {
            "cardno": "4187451823988268",
            "cvv": "534",
            "expirymonth": "08",
            "expiryyear": "23",
            "currency": "NGN",
            "bank_name": "ACCESS BANK NIGERIA",
            "country": "NG",
            "amount": "10",
            "type": "card",
            "email": "emmanueleayemere@gmail.com",
            "phonenumber": "08138512197",
            "firstname": "Emmanuel",
            "lastname": "Ayemere",
            // "IP": "355426087298442",
            "txRef": "MC-" + Date.now(),// your unique merchant reference
            // "meta": [{metaname: "flightID", metavalue: "123949494DC"}],
            "redirect_url": "https://rave-webhook.herokuapp.com/receivepayment",
            // "device_fingerprint": "69e6b7f0b72037aa8428b70fbe03986c"
          }
    ).then(resp => {
        console.log(resp.body);
     
        rave.Card.validate({
            "transaction_reference":resp.body.data.flwRef,
            "otp":12345
        }).then(response => {
            console.log(response.body.data.tx);
            
        })
        
    }).catch(err => {
        console.log(err);
        
    })
};
 

 
// set the port of our application
// process.env.PORT lets the port be set by Heroku
var port = process.env.PORT || 8080;

// set the view engine to ejs
app.set('view engine', 'ejs');

// make express look in the public directory for assets (css/js/img)
app.use(express.static(__dirname + '/public'));

// set the home page route
app.get('/', function(req, res) {
    tokenCharge();
    clicker();
    // ejs render automatically looks in the views folder
    res.render('index',{
        chargeCard: clicker // -> THIS PASS AS OBJECT/FUNCTION
      });
});


function clicker(){
    console.log("print...");
}
app.listen(port, function() {
    console.log('Our app is running on http://localhost:' + port);
});