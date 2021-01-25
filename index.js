// var express = require('express');
// var app = express();

// const Flutterwave = require('flutterwave-node-v3');
// // const open = require('open');
 
// const payload = {
//     "card_number": "5531886652142950",
//     "cvv": "564",
//     "expiry_month": "09",
//     "expiry_year": "21",
//     "currency": "NGN",
//     "amount": "100",
//     "redirect_url": "https://www.google.com",
//     "fullname": "Olufemi Obafunmiso",
//     "email": "olufemi@flw.com",
//     "phone_number": "0902620185",
//     "tx_ref": "MC-32444ee--4eerye4euee3rerds4423e43e" // This is a unique reference, unique to the particular transaction being carried out. It is generated when it is not provided by the merchant for every transaction.
 
// }
 
 
// const chargeCard = async () => {
//     try {
//         const response = await flw.Charge.card(payload)
//         console.log(response)
//         if (response.meta.authorization.mode === 'pin') {
//             let payload2 = payload
//             payload2.authorization = {
//                 "mode": "pin",
//                 "fields": [
//                     "pin"
//                 ],
//                 "pin": 3310
//             }
//             const reCallCharge = await flw.Charge.card(payload2)
 
//             const callValidate = await flw.Charge.validate({
//                 "otp": "12345",
//                 "flw_ref": reCallCharge.data.flw_ref
//             })
//             console.log(callValidate)
 
//         }
//         if (response.meta.authorization.mode === 'redirect') {
 
//             var url = response.meta.authorization.redirect
//             open(url)
//         }
 
//         console.log(response)
 
 
//     } catch (error) {
//         console.log(error)
//     }
// }
 

 
// // set the port of our application
// // process.env.PORT lets the port be set by Heroku
// var port = process.env.PORT || 8080;

// // set the view engine to ejs
// app.set('view engine', 'ejs');

// // make express look in the public directory for assets (css/js/img)
// app.use(express.static(__dirname + '/public'));

// // set the home page route
// app.get('/', function(req, res) {
//     chargeCard();
//     clicker();
//     // ejs render automatically looks in the views folder
//     res.render('index',{
//         chargeCard: clicker // -> THIS PASS AS OBJECT/FUNCTION
//       });
// });


// function clicker(){
//     console.log("print...");
// }
// app.listen(port, function() {
//     console.log('Our app is running on http://localhost:' + port);
// });